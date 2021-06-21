import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      {/* <Preloader /> */}
      <MoviesCard />
    </div>
  );
}

export default MoviesCardList;
