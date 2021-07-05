import React from 'react';

function FilterCheckbox(props) {



  return (
    <div className="filter-checkbox">
      <label htmlFor="short-movies" className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" id="short-movies" name="short-movies" onChange={props.checkboxHandler}></input>
        Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox;
