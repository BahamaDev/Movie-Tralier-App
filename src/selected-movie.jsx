import React from "react";
import { TiChevronLeft, TiStar } from "react-icons/ti";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//////This component displays the indiviual movie when it selected by the user.

const SelectedMovie = ({ result, selectedMovie, apikey }) => {
  // Filters through result.results to match movie based on id, and assign to new variable.

  let storedMovies = [JSON.parse(localStorage.getItem("movies"))];
  let movieId = localStorage.getItem("Mid");

  const selected_movie = storedMovies["0"].results.filter(
    (x) => x.id == movieId
  );
  console.log(selected_movie);
  // Sets data template for loading page.
  const [movieDetails, setMovieDetails] = useState({
    videos: { results: [{ key: "Hello" }], vote_average: 1 },
  });

  // Identifies the particular movie.
  const [theMovie, setTheMovie] = useState(selected_movie[0]);
  // console.log("theMovie", theMovie);

  // Allows movie ID to be determined base on the given conditions.
  const [loadId, setLoadId] = useState(theMovie.id);

  const api_key = localStorage.getItem("apiKey");
  const URL = `https://api.themoviedb.org/3/movie/${loadId}?api_key=${api_key}&append_to_response=videos`;

  //  Fetches data from server
  const getMovieDetails = async () => {
    try {
      const response = await fetch(URL);
      const detailsResponse = await response.json();
      setMovieDetails(detailsResponse);
      console.log("getMovieDetails fired");
      console.log(movieDetails);
    } catch (error) {}
  };

  useEffect(() => {
    setLoadId(theMovie.id);
    console.log("LOAD FIRED");
    getMovieDetails(); //connects the trailer videos to the existing interface.
  }, [theMovie]);

  //  Gets the trailer key from moviesDetails.
  const trailerKey = () => {
    if (!movieDetails.videos.results.length == 0) {
      return movieDetails.videos.results[0].key;
    } else {
      return "8BNA-N717A0";
    }
  };
  const trailerLink = `https://www.youtube.com/watch?v=${trailerKey()}`;

  const poster = () => {
    if (theMovie.poster_path == null) {
      return `https://www.rabrotech.com/upload/default/image-not-found.png`;
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
            <h2 className="selected-card-title">
              {theMovie.title || <div>"No Info Available"</div>}
            </h2>
            <div className="selected-card-subinfo">
              <h3 className="selected-card-year">
                Released: {theMovie.release_date || <div>0</div>}
              </h3>{" "}
              <div className=" selected-card-rating">
                <TiStar />
                {theMovie.vote_average}
              </div>
            </div>
            <div className="selected-card-description">
              {theMovie.overview || <div>"No Info Available"</div>}
            </div>
            {/* <FavIcon /> */}
            <a href={trailerLink} target="blank">
              <button className="play-button">WATCH TRAILER NOW</button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
