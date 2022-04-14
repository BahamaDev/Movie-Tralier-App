import "./App.css";
import React, { useEffect, useState } from "react";

import Movies from "./movies";
import Navbar from "./navbar";
import SelectedMovie from "./selected-movie";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesDem from "./tmdbtest";

function App() {
  const [searchInURL, setSearchInURL] = useState("Dolly");

  // const options = {
  //   method: "GET",
  //   url: "https://movie-database-alternative.p.rapidapi.com/",
  //   params: { s: searchInURL, r: "json", page: "10" },
  //   headers: {
  //     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  //     "X-RapidAPI-Key": "a64941e9cfmsh80fe0d9c19ee8fbp1f7dcfjsnc7e33ba4b6dd",
  //   },
  //
  const [result, setResult] = useState({
    page: 0,
    total_pages: 0,
    results: [],
    total_results: 0,
  });
  const [inputValue, setInputValue] = useState("");

  const [selectedMovie, setSelectedMovie] = useState();

  const setSearch = () => {
    console.log("InputValue recieved in setSearch: " + inputValue);
    const a = inputValue !== "" || " " ? inputValue : "";
    setSearchInURL(a);
    console.log("setSearch fired with : " + a + " as setSearchInURL");
    getMovies();
  };

  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       // `https://movie-database-alternative.p.rapidapi.com/?s=${searchInURL}&r=json&page=`,
  //       // options

  //       `https://movie-database-alternative.p.rapidapi.com/?s=${searchInURL}&r=json&page=`,
  //       options
  //     );

  //     const movies = await response.json();
  //     // console.log(searchResults);
  //     // setMovies(searchResults.Search);
  //     setResult(movies);
  //     console.log("fetchMovie fired " + searchInURL);
  //   } catch (error) {}
  // };

  const getMovies = async () => {
    const apikey = "ab70d2cf01306700109f002f1cc8938a";
    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/554?api_key=${apikey}&query=Avengers`

        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInURL}`
      );

      const apiResponse = await response.json();
      console.log(apiResponse);
      //  console.log(movies)
      setResult(apiResponse);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("useEffect fired");
    getMovies();
    console.log(result);
  }, []);

  const goToMovie = (id) => {
    console.log(id);
    setSelectedMovie(id);
  };

  if (result.results.length == 0) {
    return (
      <>
        {/* <Navbar /> */}
        <h2>No Search Results</h2>
        <button onClick={getMovies}>Refresh List</button>
      </>
    );
  }

  return (
    <Router>
      {" "}
      <main className="app-wrapper">
        <Switch>
          <Route exact path="/">
            <Navbar
              setInputValue={setInputValue}
              inputValue={inputValue}
              setSearch={setSearch}
            />
            <Movies result={result} goToMovie={goToMovie} />
          </Route>

          <Route exact path="/movies">
            <Movies result={result} {...result} goToMovie={goToMovie} />
          </Route>

          <Route exact path="/selected">
            <SelectedMovie
              result={result}
              {...result}
              selectedMovie={selectedMovie}
            />
          </Route>
          <Route exact path="/moviesdem">
            <MoviesDem />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
