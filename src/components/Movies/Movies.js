import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Preloader from './Preloader/Preloader'

function Movies() {

  const [allMovies, setAllMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);

  const [shortMoviesToggle, setShortMoviesToggle] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  function getMovies() {
    setLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        const movies = data.map((item) => {
          item.saved = false;
          return item;
        });
        localStorage.setItem('movies', JSON.stringify(movies));
        setAllMovies(JSON.parse(localStorage.getItem("movies")));
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
    if (allMovies.length === 0) {
      console.log(allMovies.length === 0);
      setAllMovies(JSON.parse(localStorage.getItem("movies")));
    }
    console.log(allMovies);
    if (shortMoviesToggle) {
      setSearchedMovies(searchMovies(shortMovies));
    } else {
      setSearchedMovies(searchMovies(allMovies));
    }
  }

  function searchMovies(movies) {
    let result = [];
    for (let key in movies) {
      if ((movies[key].nameRU).toLowerCase().includes(searchQuery.toLowerCase())) {
        result.push(movies[key]);
      }
    }
    setLoading(false);
    localStorage.setItem('searched-movies', JSON.stringify(result));
    return result;
  }

  useEffect(() => {
    if (searchQuery === '') {
      setLoading(false);
      setSearchMessage('Воспользуйтесь формой поиска фильма :)');
    }
  }, [searchQuery]);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      setAllMovies(JSON.parse(localStorage.getItem("movies")));
    } else {
      getMovies();
    }
    setSearchMessage('Воспользуйтесь формой поиска фильма :)');
  }, []);

  useEffect(() => {
    if (localStorage.getItem("searched-movies")) {
      setSearchedMovies(JSON.parse(localStorage.getItem("searched-movies")));
    }
    setSearchMessage('');
  }, []);

  useEffect(() => {
    let result = [];
    for (let key in allMovies) {
      if (allMovies[key].duration <= 40) {
        result.push(allMovies[key]);
      }
    }
    setShortMovies(result);
  }, [allMovies])

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

  function movieSave(props) {

    if (props.saved) {
      mainApi.removeMovieFromSaved(props.savedId)
        .then(() => {
          setAllMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = false;
              }
              return currentMovie;
            }));
        })
        .then(() => {
          setSearchedMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = false;
              }
              return currentMovie;
            }));
        })
        .then(() => {
          setAllMovies(allMovies);
          setSearchedMovies(searchedMovies);
          localStorage.setItem('movies', JSON.stringify(allMovies));
          localStorage.setItem('searched-movies', JSON.stringify(searchedMovies));
        })
        .catch((err) =>
          console.log(`При загрузке данных возникла ошибка: ${err.status}`)
        );
    } else {
      mainApi.addMovieToSaved(props)
        .then((res) => {
          setAllMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = true;
                currentMovie.savedId = res._id;
              }
              return currentMovie;
            }
            ));
          setSearchedMovies((state) =>
            state.filter((currentMovie) => {
              if (currentMovie.id === props.movieId) {
                currentMovie.saved = true;
                currentMovie.savedId = res._id;
              }
              return currentMovie;
            }
            ));
        })
        .then(() => {
          setAllMovies(allMovies);
          setSearchedMovies(searchedMovies);
          localStorage.setItem('movies', JSON.stringify(allMovies));
          localStorage.setItem('searched-movies', JSON.stringify(searchedMovies));
        })
        .catch((err) =>
          console.log(`При загрузке данных возникла ошибка: ${err.status}`)
        );
    }
  }

  return (
    <div className="movies">
      <SearchForm
        searchHandler={searchHandler}
        setSearchQuery={setSearchQuery}
        shortMoviesToggle={shortMoviesToggle}
        setShortMoviesToggle={setShortMoviesToggle}
      />
      {loading && <Preloader />}
      {searchedMovies.length ? (
        <MoviesCardList
          searchedMovies={searchedMovies}
          onMovieSave={movieSave}
        />
      ) : ''}
      <p className="movies__caption">{searchMessage}</p>
    </div>
  );
}

export default Movies;
