import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { useState } from 'react';
import { useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import Preloader from '../Movies/Preloader/Preloader';
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';
import { SHORT_MOVIE_DURATION } from '../../constants';

function SavedMovies() {

  //const [allMovies, setAllMovies] = useState([]);

  const [shortSavedMovies, setShortSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [shortMoviesToggle, setShortMoviesToggle] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  const currentUser = useContext(UserContext);

  function getSavedMovies() {
    setLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        const userMovies = data.filter((currentMovie) =>
          currentMovie.owner === currentUser._id ? currentMovie : ''
        )
        setSavedMovies(userMovies);
        setSearchedMovies(userMovies);
        setLoading(false);
        setSearchMessage('Воспользуйтесь формой поиска фильма :)');
      })
      .catch((err) => {
        setLoading(false);
        setSearchMessage(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`)
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      });
  }

  function searchHandler() {
    if (shortMoviesToggle) {
      setSearchedMovies(searchMovies(shortSavedMovies));
    } else {
      setSearchedMovies(searchMovies(savedMovies));
    }
  }

  function searchMovies(movies) {
    const result = [];
    for (const key in movies) {
      if ((movies[key].nameRU).toLowerCase().includes(searchQuery.toLowerCase())) {
        result.push(movies[key]);
      }
    }
    setLoading(false);
    return result;
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
        setSearchedMovies((state) =>
          state.filter((currentMovie) => {
            if (currentMovie._id === delMovie._id) {
              return '';
            }
            return currentMovie;
          }
          )
        );
        setShortSavedMovies((state) =>
          state.filter((currentMovie) => {
            if (currentMovie._id === delMovie._id) {
              return '';
            }
            return currentMovie;
          }
          )
        );
      })
      .then(() => {
        const localStorageMovies = (JSON.parse(localStorage.getItem('movies')));
        localStorageMovies.filter((currentMovie) => {
          if (currentMovie.savedId === props.movieId) {
            currentMovie.saved = false;
          }
          return currentMovie;
        })
        localStorage.setItem('movies', JSON.stringify(localStorageMovies));

        const localStorageSearchedMovies = (JSON.parse(localStorage.getItem('searched-movies')));
        localStorageSearchedMovies.filter((currentMovie) => {
          if (currentMovie.savedId === props.movieId) {
            currentMovie.saved = false;
          }
          return currentMovie;
        })
        localStorage.setItem('searched-movies', JSON.stringify(localStorageSearchedMovies));
      })
      .catch((err) =>
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      );
  }

  useEffect(() => {
    if (searchQuery === '') {
      setSearchedMovies(savedMovies);
      setLoading(false);
      setSearchMessage('Воспользуйтесь формой поиска фильма :)');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    getSavedMovies();
    setSearchMessage('Вы не добавили в избранное ни одного фильма!');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const result = [];
    for (const key in savedMovies) {
      if (savedMovies[key].duration <= SHORT_MOVIE_DURATION) {
        result.push(savedMovies[key]);
      }
    }
    setShortSavedMovies(result);
  }, [savedMovies])

  useEffect(() => {
    if (searchedMovies.length === 0 && searchQuery.length > 0) {
      setSearchMessage('Ничего не найдено :(');
    } else if (searchedMovies.length > 0) {
      setSearchMessage('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovies]);

  useEffect(() => {
    if (searchedMovies.length !== 0) {
      searchHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortMoviesToggle]);

  return (
    <div className="saved-movies">
      <SearchForm
        setSearchQuery={setSearchQuery}
        searchSavedHandler={searchMovies}
        searchHandler={searchHandler}
        shortMoviesToggle={shortMoviesToggle}
        setShortMoviesToggle={setShortMoviesToggle}
      />
      {loading && <Preloader />}
      {savedMovies.length ? (
        <section className="movies-card-list">
          <ul className="movies-card-list__list">
            {searchedMovies.map((item) => (
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
