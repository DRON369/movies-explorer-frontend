import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import CardImage1 from '../../../images/movies/33word-about-design.jpg';


function MoviesCardList({ savedList, searchedMovies }) {
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
          {searchedMovies.map((item) => (
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
        <button type="button" className="movies-card-list__button-more" aria-label="Отобразить дополнительные карточки с фильмами">Ещё</button>
      </section>
    );
  }

}

export default MoviesCardList;
