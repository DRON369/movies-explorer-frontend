import React from 'react';
import { useEffect } from 'react';


function MoviesCard(props) {


  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  function saveHandler() {
    props.onMovieSave(props);
  }

  function removeHandler() {
    props.onMovieRemove(props);
  }

  const isSaved = props.saved;
  const savedPage = props.savedList;

  return (
    <li className="movies-card">
      <a href={props.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt={props.alt} src={props.image}></img>
      </a>
      <button className={savedPage ?
        "movies-card__save-button_remove" :
        (isSaved ?
          "movies-card__save-button_saved" :
          "movies-card__save-button")
      } type="button" aria-label="Сохранить фильм в избранное" onClick={savedPage ? removeHandler : saveHandler}>{savedPage ? '' : (isSaved ? '' : 'Сохранить')}</button>
      <div className="movies-card__body">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__duration">{getTimeFromMins(parseInt(props.duration))}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
