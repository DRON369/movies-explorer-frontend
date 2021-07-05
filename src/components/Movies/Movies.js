import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Preloader from './Preloader/Preloader'

function Movies() {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  function searchHandler() {
    let searchedMovies = [];
    for (let key in movies) {
      if ((movies[key].nameRU).toLowerCase().includes(searchQuery.toLowerCase())) {
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
        localStorage.setItem('movies', JSON.stringify(data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setSearchMessage(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`)
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      });
  }

  function movieSave(props) {
    if (props.saved) {
      mainApi.removeMovieFromSaved(props.savedId)
        .then(() => {
          setMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = false;
              }
              return currentMovie;
            }));
        })
        .then(() => {
          setSearchedMovies(movies);
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .catch((err) =>
          console.log(`При загрузке данных возникла ошибка: ${err.status}`)
        );
    } else {
      mainApi.addMovieToSaved(props)
        .then((res) => {
          setMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = true;
                currentMovie.savedId = res._id;
              }
              return currentMovie;
            }));
        })
        .then(() => {
          setSearchedMovies(movies);
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .catch((err) =>
          console.log(`При загрузке данных возникла ошибка: ${err.status}`)
        );
    }
  }

  useEffect(() => {
    if (searchedMovies.length === 0) {
      setSearchMessage('Ничего не найдено :(');
    } else if (movies.length > 0 && searchedMovies.length > 0) {
      setSearchMessage('');
    }
    // eslint-disable-next-line
  }, [searchedMovies.length]);

  useEffect(() => {
    if (searchQuery === '') {
      setLoading(false);
      setSearchMessage('Воспользуйтесь формой поиска фильма :)');
      setSearchedMovies(movies);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      setMovies(JSON.parse(localStorage.getItem("movies")));
      setSearchedMovies(JSON.parse(localStorage.getItem("movies")));
    } else {
      getMovies();
    }
    setSearchMessage('Воспользуйтесь формой поиска фильма :)');
  }, []);

  return (
    <div className="movies">
      <SearchForm setSearchQuery={setSearchQuery} searchHandler={searchHandler} />
      {loading && <Preloader />}
      {searchedMovies.length ? (
        <MoviesCardList searchedMovies={searchedMovies} onMovieSave={movieSave} />
      ) : ''}
      <p className="movies__caption">{searchMessage}</p>
    </div>
  );
}

export default Movies;
