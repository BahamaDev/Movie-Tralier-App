import React from "react";
import FavIcon from "./favicon";
import { TiChevronLeft } from "react-icons/ti";

import { Link } from "react-router-dom";

const SelectedMovie = ({ result, selectedMovie }) => {
  console.log(result);

  const { pages, total_pages } = result;

  console.log(total_pages);
  const selected_movie = result.results.filter(
    (item) => item.id == selectedMovie
  );

  const theMovie = selected_movie[0] || {};

  console.log(theMovie);

  const poster = `https://image.tmdb.org/t/p/w500/${theMovie.poster_path}`;
  return (
    // <>Hello</>
    <>
      <div className="selected-movie-page">
        <div className="button-section">
          <Link to="/" className="link">
            <div className="back-button">
              <TiChevronLeft />
              BACK
            </div>
          </Link>
        </div>

        <div className="selected-card-poster">
          {" "}
          <img
            className="selected-card-image"
            src={poster}
            alt="poster_image"
          />
        </div>
        <section className="selected-card-info">
          {" "}
          <h2 className="selected-card-title">{theMovie.title}</h2>
          <h3 className="selected-card-year">
            Released: {theMovie.release_date}
          </h3>
          <div className="selected-card-description">{theMovie.overview}</div>
          {/* <FavIcon /> */}
          <button className="play-button">WATCH MOVIE NOW</button>
        </section>
      </div>
    </>
  );
};

export default SelectedMovie;
