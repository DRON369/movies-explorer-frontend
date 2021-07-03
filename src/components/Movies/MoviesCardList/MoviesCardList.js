import React, { useEffect } from 'react';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import CardImage1 from '../../../images/movies/33word-about-design.jpg';


function MoviesCardList({ savedList, searchedMovies }) {

  const [itemsToShow, setItemsToShow] = useState(0);
  const [expandFeature, setExpandFeature] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandMovieCount, setExpandMovieCount] = useState(0);

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

  if (savedList) {
    return (
      <section className="movies-card-list">
        <ul className="movies-card-list__list">
          <MoviesCard
            page='saved-movies'
            saved={true}
            image={CardImage1}
            title='33 слова о дизайне'
            duration='1ч 17м'
            alt="Фотограф и люди на фоне автомобиля"
          />
        </ul>
      </section>
    )
  }
  else {
    return (
      <section className="movies-card-list">
        <ul className="movies-card-list__list">
          {searchedMovies.slice(0, itemsToShow).map((item) => (
            <MoviesCard
              key={item.id}
              saved={false}
              image={`https://api.nomoreparties.co${item.image.url}`}
              title={item.nameRU}
              duration={`${item.duration} минут`}
              alt={`${item.image.alternativeText} && ${item.image.name}`}
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

}

export default MoviesCardList;
