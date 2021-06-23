import React from 'react';


function MoviesCard(props) {

  const isSaved = props.saved;
  let cardSaveButtonClassName;
  if (props.page === 'saved-movies'){
    cardSaveButtonClassName = 'movies-card__save-button_remove';
  } else {
    cardSaveButtonClassName = isSaved ? "movies-card__save-button_saved" : "movies-card__save-button";
  }

  return (
    <li className="movies-card">
      <img className="movies-card__image" alt="" src={props.image}></img>
      <button className={ cardSaveButtonClassName } type="button" aria-label="Сохранить фильм в избранное" >{ isSaved ? '' : 'Сохранить'}</button>
      <div className="movies-card__body">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__duration">{props.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
