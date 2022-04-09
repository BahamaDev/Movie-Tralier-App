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
          <div className="selected-card-poster">
            {" "}
            <img
              className="selected-card-image"
              src={theMovie.Poster}
              alt="poster_image"
            />
          </div>

          <section className="selected-card-info">
            {" "}
            <h2 className="selected-card-title">{theMovie.Title}</h2>
            <h3 className="selected-card-year">Released: {theMovie.Year}</h3>
            <div className="selected-card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ratione consequatur sunt eaque cupiditate quis itaque optio in sed
              enim deserunt modi vero, pariatur magnam quibusdam, impedit
              repudiandae, necessitatibus ducimus? Reprehenderit enim,
              doloremque corporis maiores assumenda quas, est magni ratione
              nihil accusantium voluptatum quidem iste, fugiat sit omnis
              molestias nam.
            </div>
            {/* <FavIcon /> */}
            <button className="play-button">WATCH MOVIE NOW</button>
          </section>
        </div>
      }
    </>
  );
};

export default SelectedMovie;
