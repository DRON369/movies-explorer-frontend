import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';


function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList
        savedList={true}
      />
    </div>
  );
}

export default SavedMovies;
