import React from "react";
import Movie from "./movie";

const Movies = ({ movies }) => {
    console.log(movies)
    console.log(movies)
  return (
    <>
      <div>
        <h2>Search Results</h2>
      </div>

      <div>
        {movies.map((movie) => {
            console.log(movie)
          return <Movie key={movie.imdbID} {...movie}></Movie>;
        })}
      </div>
    </>
  );
};

export default Movies;
