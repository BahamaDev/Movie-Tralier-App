import React from "react";
import { NavLink } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import FavIcon from "./favicon";

const Movie = ({
  popularity,
  vote_average,
  poster_path,
  id,
  title,
  release_date,
  goToMovie,
}) => {
  const poster = () => {
    if (poster_path == null) {
      return `https://variety.com/wp-content/uploads/2020/03/movie-theater-popcorn-placeholder.jpg?w=500`;
    }
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };

  return (
    <>
      <article onClick={() => goToMovie(id)} className="movie-card">
        <NavLink to="/selected">
          <section className="movie-card-visual">
            {" "}
            <div className="movie-card-rating">
              <TiStar />
              {vote_average}
            </div>
            <img className="movie-card-poster" src={poster()} alt={title} />{" "}
          </section>{" "}
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
