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
  const [searchInURL, setSearchInURL] = useState("dolly");
  // const searchInURL = inputValue !== "" ? inputValue : "dolly";

  const setSearch = () => {
    console.log("InputValue recieved in setSearch: " + inputValue);
    const a = inputValue !== "" || " " ? inputValue : "dolly";
    setSearchInURL(a);
    console.log("setSearch fired with : " + a + " as setSearchInURL");
    fetchMovies();
  };

  //Recieves typed input sets it as inputValue
  // const recieveInput = () => {
  //   console.log("recievedInput: " + inputValue);
  // };

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
      console.log("fetchMovie fired " + searchInURL);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("useEffect fired");
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

  return (
    <main>
      <div className="navbar">
        {" "}
        <input
          type="text"
          className="test-input"
          placeholder="testinput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={(e) => setSearch(e)}>Search</button>
      </div>

      {/* <Navbar /> */}
      <Movies result={result} />
    </main>
  );
}

export default App;
