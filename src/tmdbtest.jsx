import React, { useEffect } from "react";
import { useState } from "react";

const MoviesDem = () => {
  const [tmdbMovies, setTmdbMovies] = useState();
  const apikey = "ab70d2cf01306700109f002f1cc8938a";
 

  const getMovies = async () => {
    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/554?api_key=${apikey}&query=Avengers`

        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=The+Witcher`
      );
    //   console.log(response);
      const tmdbMovies = await response.json();
      console.log(tmdbMovies);
    } catch (error) {}
  };


    useEffect(() => {
      console.log("useEffect fired");
      getMovies();
    //   console.log(result);
    }, []);

 

  return (
    <>
      <div>"Hello"</div>
    </>
  );
};

export default MoviesDem;


//get movie id and pass it to selected-movie. Then deconstruct it to the DOM.