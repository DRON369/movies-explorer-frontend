import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

import CardImage1 from '../../../images/movies/33word-about-design.jpg';
import CardImage2 from '../../../images/movies/100years.jpg';
import CardImage3 from '../../../images/movies/banksy.jpg';
import CardImage4 from '../../../images/movies/Explode.jpg';
import CardImage5 from '../../../images/movies/freedom-run.jpg';
import CardImage6 from '../../../images/movies/bookmakers.jpg';
import CardImage7 from '../../../images/movies/germany.jpg';
import CardImage8 from '../../../images/movies/gimme.jpg';
import CardImage9 from '../../../images/movies/janis.jpg';
import CardImage10 from '../../../images/movies/jum.jpg';
import CardImage11 from '../../../images/movies/pi-jay-harvy.jpg';
import CardImage12 from '../../../images/movies/waves.jpg';

function MoviesCardList(props) {
  if (props.savedList) {
    return (
      <section className="movies-card-list">
        {/* <Preloader /> */}
        <ul className="movies-card-list__list">
          <MoviesCard
            page='saved-movies'
            saved={true}
            image={CardImage1}
            title='33 слова о дизайне'
            duration='1ч 17м'
          />
          <MoviesCard
            page='saved-movies'
            saved={true}
            image={CardImage2}
            title='Киноальманах «100 лет дизайна»'
            duration='1ч 17м'
          />
          <MoviesCard
            page='saved-movies'
            saved={true}
            image={CardImage3}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
        </ul>
      </section>
    )
  }
  else {
    return (
      <section className="movies-card-list">
        {/* <Preloader /> */}
        <ul className="movies-card-list__list">

          <MoviesCard
            saved={false}
            image={CardImage1}
            title='33 слова о дизайне'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={true}
            image={CardImage2}
            title='Киноальманах «100 лет дизайна»'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage3}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage4}
            title='Баския: Взрыв реальности'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage5}
            title='Бег это свобода'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={true}
            image={CardImage6}
            title='Книготорговцы'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage7}
            title='Когда я думаю о Германии ночью'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage8}
            title='Gimme Danger: История Игги и The Stooges'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage9}
            title='Дженис: Маленькая девочка грустит'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage10}
            title='Соберись перед прыжком'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage11}
            title='Пи Джей Харви: A dog called money'
            duration='1ч 17м'
          />
          <MoviesCard
            saved={false}
            image={CardImage12}
            title='По волнам: Искусство звука в кино'
            duration='1ч 17м'
          />
        </ul>
        <button type="button" className="movies-card-list__button-more" aria-label="Отобразить дополнительные карточки с фильмами">Ещё</button>
      </section>
    );
  }

}

export default MoviesCardList;
