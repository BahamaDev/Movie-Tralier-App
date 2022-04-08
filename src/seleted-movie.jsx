import React from "react";
import FavIcon from "./favicon";
import { useEffect } from "react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const SelectedMovie = ({ result, selectedMovie }) => {
  const { Search, Response, totalResults } = result;

  console.log(result);
  console.log(result.Search);
  console.log(Search);

  const selected_movie = Search.filter((item) => item.imdbID == selectedMovie);
  console.log("this is sent to selected Movie: " + selectedMovie);
  const theMovie = selected_movie[0] || {};

  console.log(selected_movie);
  console.log(selected_movie[0]);

  console.log();
  return (
    <>
      {
        <div className="selected-movie-page">
          <img
            className="selected-card-poster"
            src={theMovie.Poster}
            alt="poster_image"
          />
          <section className="selected-card-info">
            {" "}
            <h2 className="selected-card-title">{theMovie.Title}</h2>
            <h3 className="selected-card-year">Released: {theMovie.Year}</h3>
            <div className="selected-card-icon">
              <FavIcon />
            </div>
          </section>
        </div>
      }
    </>
  );
};

export default SelectedMovie;
