import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__form">
        <div className="search-form__search">
          <input className="search-form__input" type="text" name="search-movie-name" placeholder="Фильм" required></input>
          <button className="search-form__button" type="submit">Найти</button>
        </div>
        <FilterCheckbox />
      </form>

    </div>
  );
}

export default SearchForm;
