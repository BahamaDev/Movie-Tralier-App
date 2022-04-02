import React from "react";
import Movie from "./movie";

const Movies = ({ result }) => {
  const { Response, Search, totalResults } = result;
  //   console.log(result);
  //   console.log(result);
  return (
    <>
      <div>
        <h2>Search Results</h2>
        <h3 className="movie-count">{totalResults}</h3>
      </div>

      <div>
        {Search.map((movie) => {
          //   console.log(movie);
          return <Movie key={movie.imdbID} {...movie}></Movie>
          
          ;
        })}
      </div>
    </>
  );
};

export default Movies;
