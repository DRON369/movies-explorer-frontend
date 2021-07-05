import React, { useEffect } from 'react';
import { useState } from 'react';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';


function MoviesSavedList({ searchedSavedMovies, onMovieRemove, searchMessage }) {

  const currentUser = useContext(UserContext);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {searchedSavedMovies.map((item) => (
          <MoviesCard
            key={item._id}
            saved={item.saved}
            savedId={item.savedId}
            image={item.image}
            thumbnail={item.image}
            trailerLink={item.trailerLink}
            title={item.nameRU}
            duration={item.duration}
            alt={`${item.image.alternativeText} && ${item.image.name}`}
            onMovieRemove={onMovieRemove}
            country={item.country}
            director={item.director}
            year={item.year}
            description={item.description}
            movieId={item._id}
            nameEN={item.nameEN}
            savedList={true}
          />
        ))}
      </ul>
    </section>
  )
}

export default MoviesSavedList;
