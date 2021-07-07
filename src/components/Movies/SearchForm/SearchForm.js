import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  setSearchQuery,
  shortMoviesToggle,
  setShortMoviesToggle,
  searchHandler
}) {

  function handleChangeSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchHandler();
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__search">
          <input className="search-form__input" type="text" name="search-movie-name" placeholder="Фильм" required onChange={handleChangeSearchQuery}></input>
          <button className="search-form__button" type="submit">Найти</button>
        </div>
        <FilterCheckbox
          shortMoviesToggle={shortMoviesToggle}
          setShortMoviesToggle={setShortMoviesToggle}
        />
      </form>

    </div >
  );
}

export default SearchForm;
