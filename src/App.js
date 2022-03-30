import "./App.css";
import React, { useEffect, useState } from "react";

import Movies from "./movies";
import Navbar from "./navbar";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    "X-RapidAPI-Key": "a64941e9cfmsh80fe0d9c19ee8fbp1f7dcfjsnc7e33ba4b6dd",
  },
};

function App() {
  const [result, setResult] = useState({});

  const [inputValue, setInputValue] = useState("");
  const [searchInURL, setsearchInURL] = useState();
  // const searchInURL = inputValue !== "" ? inputValue : "dolly";

  const setSearch = () => {
    let a = inputValue !== "" ? inputValue : "dolly";
    setsearchInURL(a);
    console.log("setSearch fired");
  };

  const recieveInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${searchInURL}&r=json&page=1`,
        options
      );

      const movies = await response.json();
      // console.log(searchResults);
      // setMovies(searchResults.Search);
      setResult(movies);
      console.log("fetchMovie fired");
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
    console.log(result);
  }, []);

  if (result.Response !== "True") {
    return (
      <>
        <Navbar />
        <h2>No Search Results</h2>
        <button onClick={fetchMovies}>Refresh List</button>
      </>
    );
  }

  ///Sets Search and Fectches Movie using that search value.
  const searchMovies = () => {
    setSearch();
    fetchMovies();
  };

  return (
    <main>
      <input
        type="text"
        className="test-input"
        placeholder="testinput"
        value={inputValue}
        onChange={(e) => recieveInput(e)}
      />
      <button onClick={searchMovies}>Search</button>
      {/* <Navbar /> */}
      <Movies result={result} />
    </main>
  );
}

export default App;
