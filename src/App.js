import "./App.css";
import React, { useEffect, useState } from "react";
import Movies from "./movies";

const searchParam = "Avengers";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    "X-RapidAPI-Key": "a64941e9cfmsh80fe0d9c19ee8fbp1f7dcfjsnc7e33ba4b6dd",
  },
};

function App() {
  const [movies, setMovies] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${searchParam}&r=json&page=1`,
        options
      );

      const searchResults = await response.json();
      console.log(searchResults);
      setMovies(searchResults.Search);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);

  if (movies.length === 0) {
    return (
      <>
        <h2>No Search Results</h2>
        <button onClick={fetchMovies}>Refresh List</button>
      </>
    );
  }

  return (
    <main>
      <Movies movies={movies} />
    </main>
  );
}

export default App;
