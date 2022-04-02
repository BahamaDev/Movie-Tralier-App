import React from "react";
import FavIcon from "./favicon";

const Movie = ({ imdbID, Poster, Title, Year }) => {
  return (
    <>
      <article className="movie-card">
        <img className="card-poster" src={Poster} alt="" />
        <h2 className="card-title">{Title}</h2>
        <h3 className="card-year">Released: {Year}</h3>
        {/* <p className="card-description"></p> */}
        {/* <h3>{imdbID}</h3> */}
        <FavIcon />
      </article>
    </>
  );
};

export default Movie;
