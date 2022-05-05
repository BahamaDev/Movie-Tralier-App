import React from "react";
import { TiChevronLeft, TiStar } from "react-icons/ti";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//////This component displays the indiviual movie when it selected by the user.

const SelectedMovie = ({ result, selectedMovie, apikey }) => {
  const { pages, total_pages } = result;

  // Filters through result.results to match movie based on id, and assign to new variable.
  const selected_movie = result.results.filter(
    (item) => item.id == selectedMovie
  );

  // Sets data template for loading page.
  const [movieDetails, setMovieDetails] = useState({
    videos: { results: [{ key: "Hello" }], vote_average: 1 },
  });

  // Identifies the particular movie.
  const theMovie = selected_movie[0] || {};
  // console.log(theMovie);

  // Allows movie ID to be determined base on the given conditions.
  const [loadId, setLoadId] = useState(theMovie.id);

  const api_key = apikey;
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

  // Sets the given value loadId to local storage for page refresh.
  localStorage.setItem("reloadInfo", JSON.stringify(loadId));

  // Retrieves the value from local storage and assigns to new variable.
  let data = localStorage.getItem("reloadInfo");
  const newLoadId = JSON.parse(data);
  console.log(newLoadId);
  useEffect(() => {
    setLoadId(theMovie.id);
    if (!theMovie.id) {
      setLoadId(newLoadId.loadId);
      getMovieDetails();
      console.log("use Effect Fired");
    }
    getMovieDetails();
    console.log(loadId);
  }, []);

  //  Gets the trailer key from moviesDetails.
  const trailerKey = movieDetails.videos.results[0].key;
  const trailerLink = `https://www.youtube.com/watch?v=${trailerKey}`;

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
              <button className="play-button">WATCH TRAILER NOW</button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
