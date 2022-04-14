import React from "react";
import Movie from "./movie";
import { Link } from "react-router-dom";
import { useState } from "react";

const Movies = ({ result, goToMovie }) => {
  console.log(result);

  const {total_results,}= {...result}

  return (
    <>
      <div className="movies-header">
        <h2 className="movies-header">
          {" "}
          <span className="movies-count"> {result.total_results} </span> Search
          Results{" "}
        </h2>
      </div>
      <div className="movies-list">
        {
        
        
        result.results.map((item) => {
          console.log(item);
          return <Movie key={item.id} {...item} goToMovie={goToMovie}></Movie>;
        })}
      </div>
    </>
  );
};

export default Movies;
