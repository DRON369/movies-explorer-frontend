import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ savedList, setSearchQuery, searchHandler,  searchSavedHandler }) {

  function handleChangeSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchHandler();
  }

  function handleSavedSubmit(event) {
    event.preventDefault();
    searchSavedHandler();
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={savedList ? handleSavedSubmit : handleSubmit}>
        <div className="search-form__search">
          <input className="search-form__input" type="text" name="search-movie-name" placeholder="Фильм" required onChange={handleChangeSearchQuery}></input>
          <button className="search-form__button" type="submit">Найти</button>
        </div>
        <FilterCheckbox />
      </form>

    </div >
  );
}

export default SearchForm;
