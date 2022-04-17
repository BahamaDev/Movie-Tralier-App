import React from "react";
import FavIcon from "./favicon";
import { TiChevronLeft, TiStar } from "react-icons/ti";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const SelectedMovie = ({ result, selectedMovie, apikey }) => {
  const { pages, total_pages } = result;
 
  const selected_movie = result.results.filter(
    (item) => item.id == selectedMovie
  );

  const [movieDetails, setDMovieDetails] = useState({
    videos: { results: [{ key: "hello" }], vote_average: 1 },
  });
  const theMovie = selected_movie[0] || {};

  console.log(theMovie);

  const api_key = apikey;

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/554?api_key=${apikey}&query=Avengers`

        `https://api.themoviedb.org/3/movie/${theMovie.id}?api_key=${api_key}&append_to_response=videos`
      );

      const detailsResponse = await response.json();
      // console.log(apiResponse);

      setDMovieDetails(detailsResponse);
      console.log(detailsResponse);
      // console.log("getMovieDetails fired");
    } catch (error) {}
  };

  useEffect(() => {
    console.log("details useEffect fired");
    getMovieDetails();
    console.log(movieDetails);
  }, []);

  let trailerKey = movieDetails.videos.results[0].key;
  console.log("trailer is" + trailerKey);

  const trailerLink = `https://www.youtube.com/watch?v=${trailerKey}`;

  const poster = () => {
    if (theMovie.poster_path == null) {
      return `https://variety.com/wp-content/uploads/2020/03/movie-theater-popcorn-placeholder.jpg?w=500`;
    }
    return `https://image.tmdb.org/t/p/w500/${theMovie.poster_path}`;
  };

  return (
   
    <>
      <div className="selected-wrapper">
        <div className="selected-movie-page">
          <div className="button-section">
            <Link to="/" className="link">
              <div className="back-button .btn-grad">
                <TiChevronLeft />
                BACK
              </div>
            </Link>
          </div>

          <div className="selected-card-poster">
            {" "}
            <img
              className="selected-card-image"
              src={poster()}
              alt="poster_image"
            />
          </div>
          <section className="selected-card-info">
            {" "}
            <h2 className="selected-card-title">{theMovie.title}</h2>
            <div className="selected-card-subinfo">
              <h3 className="selected-card-year">
                Released: {theMovie.release_date}
              </h3>{" "}
              <div className=" selected-card-rating">
                <TiStar />
                {theMovie.vote_average}
              </div>
            </div>
            <div className="selected-card-description">{theMovie.overview}</div>
            {/* <FavIcon /> */}
            <a href={trailerLink} target="blank">
              <button className="play-button">WATCH MOVIE NOW</button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
