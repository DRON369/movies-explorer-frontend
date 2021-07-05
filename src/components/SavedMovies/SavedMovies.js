import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { useState } from 'react';
import { useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import Preloader from '../Movies/Preloader/Preloader';
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedMovies() {

  const [loading, setLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  const currentUser = useContext(UserContext);

  function searchSavedHandler() {
    let searchedMovies = [];
    for (let key in savedMovies) {
      if ((savedMovies[key].nameRU).toLowerCase().includes(searchQuery.toLowerCase())) {
        searchedMovies.push(savedMovies[key]);
      }
    }
    setSearchedSavedMovies(searchedMovies);
  }

  function getSavedMovies() {
    setLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        const userMovies = data.filter((currentMovie) =>
          currentMovie.owner === currentUser.id ? currentMovie : ''
        )
        setSavedMovies(userMovies);
        setSearchedSavedMovies(userMovies);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setSearchMessage(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`)
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      });
  }

  function movieRemove(props) {
    mainApi
      .removeMovieFromSaved(props.movieId)
      .then((delMovie) => {
        setSavedMovies((state) =>
          state.filter((currentMovie) => {
            if (currentMovie._id === delMovie._id) {
              return '';
            }
            return currentMovie;
          }
          )
        );
        setSearchedSavedMovies(savedMovies);
      })
      .then(() => {
        const localStorageMovies = (JSON.parse(localStorage.getItem('movies')));
        localStorageMovies.filter((currentMovie) => {
          if (currentMovie.savedId === props.movieId) {
            console.log(currentMovie);
            console.log(props);
            currentMovie.saved = false;
          }
          return currentMovie;
        })
        localStorage.setItem('movies', JSON.stringify(localStorageMovies));
      })
      .catch((err) =>
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      );
  }

  useEffect(() => {
    getSavedMovies();
  }, []);

  useEffect(() => {
    if (searchedSavedMovies.length === 0) {
      setSearchMessage('Ничего не найдено :(');
    } else if (savedMovies.length > 0 && searchedSavedMovies.length > 0) {
      setSearchMessage('');
    }
  }, [searchedSavedMovies]);

  useEffect(() => {
    if (searchQuery === '' && searchedSavedMovies.length === 0) {
      setLoading(false);
      setSearchMessage(`Вы не добавили в избранное ни одного фильма!`);
    }
  }, [searchQuery, searchedSavedMovies]);

  useEffect(() => {
    setSearchedSavedMovies(savedMovies);
  }, [savedMovies]);

  return (
    <div className="saved-movies">
      <SearchForm
        savedList={true}
        setSearchQuery={setSearchQuery}
        searchSavedHandler={searchSavedHandler}
      />
      {loading && <Preloader />}
      {savedMovies.length ? (
        <section className="movies-card-list">
          <ul className="movies-card-list__list">
            {searchedSavedMovies.map((item) => (
              <MoviesCard
                key={item._id}
                saved={item.saved}
                savedId={item.savedId}
                image={item.image}
                thumbnail={item.image}
                trailerLink={item.trailerLink}
                title={item.nameRU}
                duration={item.duration}
                alt={`${item.image.alternativeText} && ${item.image.name}`}
                onMovieRemove={movieRemove}
                country={item.country}
                director={item.director}
                year={item.year}
                description={item.description}
                movieId={item._id}
                nameEN={item.nameEN}
                savedList={true}
              />
            ))}
          </ul>
        </section>
      ) : ''
      }
      <p className="movies__caption">{searchMessage}</p>
    </div>
  );
}

export default SavedMovies;
