import React from 'react';

function FilterCheckbox(props) {

  function checkboxHandler() {
    props.setShortMoviesToggle(!props.shortMoviesToggle);
  }

  return (
    <div className="filter-checkbox">
      <label htmlFor="short-movies" className="filter-checkbox__label">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          id="short-movies" name="short-movies"
          onChange={checkboxHandler}
          checked={props.shortMoviesToggle && 'checked'}>
        </input>
        Короткометражки
      </label>
    </div >
  )
}

export default FilterCheckbox;
