import React from "react";
import { NavLink } from "react-router-dom";
import FavIcon from "./favicon";

const Movie = ({
  backdrop_path,
  poster_path,
  id,
  genre_ids,
  title,
  overview,
  release_date,
  goToMovie,
}) => {
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <>
      <article onClick={() => goToMovie(id)} className="movie-card">
        <NavLink to="/selected">
          {" "}
          <img className="movie-card-poster" src={poster} alt="" />
        </NavLink>
        <section className="movie-card-info">
          {" "}
          <h2 className="movie-card-title">{title}</h2>
          <h3 className="movie-card-year">Released: {release_date}</h3>
          <div className="movie-card-icon">
            <FavIcon />
          </div>
        </section>
      </article>
    </>
  );
};

export default Movie;
