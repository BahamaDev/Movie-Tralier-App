import "./App.css";
import React, { useEffect, useState } from "react";
import Movies from "./movies";
import Navbar from "./navbar";
import SelectedMovie from "./selected-movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesDem from "./tmdbtest";

function App() {
  const [searchInURL, setSearchInURL] = useState("Dolly");

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

  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const apikey = "ab70d2cf01306700109f002f1cc8938a";
    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/554?api_key=${apikey}&query=Avengers`

        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInURL}&page=${page}`
      );

      const apiResponse = await response.json();
      // console.log(apiResponse);

      setResult(apiResponse);
    } catch (error) {}
  };

  const handlePageForward = (currentpage) => {
    if (currentpage > 0 && currentpage < result.total_pages)
      setPage(currentpage + 1);
    getMovies();

    console.log("handle page advance");
  };

  const handlePageBack = (currentpage) => {
    if (currentpage > 1 && currentpage <= result.total_pages)
      setPage(currentpage - 1);
    getMovies();
    console.log("handle page advance");
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
            <Movies
              result={result}
              goToMovie={goToMovie}
              handlePageForward={handlePageForward}
              handlePageBack={handlePageBack}
            />
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

// Make everything fully responsive.
