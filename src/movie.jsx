import React from "react";

const Movie = ({ imdbID, Poster, Title, Year }) => {
  return (
    <>
      <img src={Poster} alt="" />
      <h2>{Title}</h2>
      <h3>{Year}</h3>
      <h3>{imdbID}</h3>
    </>
  );
};

export default Movie;
