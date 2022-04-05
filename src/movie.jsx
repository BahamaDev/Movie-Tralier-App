import React from "react";
import FavIcon from "./favicon";

const Movie = ({ imdbID, Poster, Title, Year }) => {
  return (
    <>
      <article className="movie-card">
        <img className="movie-card-poster" src={Poster} alt="" />
        <section className="movie-card-info">
          {" "}
          <h2 className="movie-card-title">{Title}</h2>
          <h3 className="movie-card-year">Released: {Year}</h3>
          <div className="movie-card-icon">
            <FavIcon />
          </div>
        </section>

        {/* <p className="card-description"></p> */}
        {/* <h3>{imdbID}</h3> */}
      </article>
    </>
  );
};

export default Movie;
