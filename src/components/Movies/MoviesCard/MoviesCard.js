import React from 'react';


function MoviesCard(props) {

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  function saveHandler() {
    props.onMovieSave(props);
  }

  const isSaved = props.saved;
  let cardSaveButtonClassName;
  if (props.page === 'saved-movies') {
    cardSaveButtonClassName = 'movies-card__save-button_remove';
  } else {
    cardSaveButtonClassName = isSaved ? "movies-card__save-button_saved" : "movies-card__save-button";
  }

  return (
    <li className="movies-card">
      <a href={props.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt={props.alt} src={props.image}></img>
      </a>
      <button className={cardSaveButtonClassName} type="button" aria-label="Сохранить фильм в избранное" onClick={saveHandler}>{isSaved ? '' : 'Сохранить'}</button>
      <div className="movies-card__body">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__duration">{getTimeFromMins(parseInt(props.duration))}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
