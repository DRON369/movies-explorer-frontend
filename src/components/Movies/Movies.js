import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import Preloader from './Preloader/Preloader'

function Movies() {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  function searchHandler() {
    getMovies();
    const movies = JSON.parse(localStorage.getItem("movies"));
    let searchedMovies = [];
    for (let key in movies) {
      if (movies[key].nameRU.includes(searchQuery)) {
        searchedMovies.push(movies[key]);
      }
    }
    setSearchedMovies(searchedMovies);
  }

  function getMovies() {
    setLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        setMovies(data);
        localStorage.setItem('movies', JSON.stringify(data))
      }).then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setSearchMessage('При загрузке данных возникла ошибка :(')
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      });
  }

  useEffect(() => {
    if (movies.length > 0 && searchedMovies.length === 0) {
      setSearchMessage('Ничего не найдено :(');
    } else if (movies.length > 0 && searchedMovies.length > 0) {
      setSearchMessage('');
    }
  }, [movies.length, searchedMovies.length, searchQuery]);

  useEffect(() => {
    if (searchQuery === '') {
      setSearchMessage('Воспользуйтесь формой поиска фильма :)');
    }
  }, [searchQuery]);


  return (
    <div className="movies">
      <SearchForm setSearchQuery={setSearchQuery} searchHandler={searchHandler} />
      {loading && <Preloader />}
      {searchedMovies.length ? (
        <MoviesCardList searchedMovies={searchedMovies} />
      ) : ''}
      <p className="movies__caption">{searchMessage}</p>
    </div>
  );
}

export default Movies;
