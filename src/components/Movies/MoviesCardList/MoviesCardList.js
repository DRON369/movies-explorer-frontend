import React, { useEffect } from 'react';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { UserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';


function MoviesCardList({
  searchedMovies,
  onMovieSave,
  onMovieRemove
}) {

  const [itemsToShow, setItemsToShow] = useState(0);
  const [expandFeature, setExpandFeature] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandMovieCount, setExpandMovieCount] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const currentUser = useContext(UserContext);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth >= 1280) {
      setItemsToShow(12);
      setExpandMovieCount(3);
    }
    if (windowWidth < 1280) {
      setItemsToShow(8);
      setExpandMovieCount(2);
    }
    if (windowWidth < 768) {
      setItemsToShow(5);
      setExpandMovieCount(1);
    }
  }, [searchedMovies.length, windowWidth])

  useEffect(() => {
    if (searchedMovies.length > itemsToShow) {
      setExpandFeature(true);
    } else {
      setExpandFeature(false);
    }
  }, [itemsToShow, searchedMovies.length])

  function showMoreHandler() {
    setItemsToShow(itemsToShow + expandMovieCount);
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {searchedMovies.slice(0, itemsToShow).map((item) => (
          <MoviesCard
            key={item.id}
            saved={item.saved}
            savedId={item.savedId}
            image={`https://api.nomoreparties.co${item.image.url}`}
            thumbnail={`https://api.nomoreparties.co${item.image.formats.thumbnail.url}`}
            trailerLink={item.trailerLink}
            title={item.nameRU}
            duration={item.duration}
            alt={`${item.image.alternativeText} && ${item.image.name}`}
            onMovieSave={onMovieSave}
            onMovieRemove={onMovieRemove}
            country={`${item.country} && ${''}`}
            director={item.director}
            year={item.year}
            description={item.description}
            movieId={item.id}
            nameEN={`${item.nameEN} && ${''}`}
          />
        ))}
      </ul>
      {expandFeature && <button
        type="button"
        className="movies-card-list__button-more"
        aria-label="Отобразить дополнительные карточки с фильмами"
        onClick={showMoreHandler}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
