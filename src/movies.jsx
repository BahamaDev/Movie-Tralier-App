import React from "react";
import Movie from "./movie";

const Movies = ({ result, goToMovie }) => {
  const { Response, Search, totalResults } = result;
  return (
    <>
      <div className="movies-header">
        <h2 className="movies-header">
          {" "}
          <span className="movies-count"> {totalResults} </span> Search Results{" "}
        </h2>
      </div>

      <div className="movies-list">
        {Search.map((movie) => {
          //   console.log(movie);
          return <Movie key={movie.imdbID} {...movie} goToMovie={goToMovie}></Movie>;
        })}
      </div>
    </>
  );
};

export default Movies;
