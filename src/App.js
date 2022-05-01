import "./App.css";
import React, { useEffect, useState } from "react";
import Movies from "./movies";
import Navbar from "./navbar";
import SelectedMovie from "./selected-movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesDem from "./tmdbtest";

function App() {
  //Manages the value of the final value to be inserted into the URL in Search search Mode
  const [searchInURL, setSearchInURL] = useState("Halo");
  const [discoverMode, setDiscoverMode] = useState(true)
  const [mode, setMode] = useState("discover")

  // Manages the response recieved from the API call.
  const [result, setResult] = useState({
    page: 0,
    total_pages: 0,
    results: [],
    total_results: 0,
  });

  // Manages what the typed input value is.
  const [inputValue, setInputValue] = useState("");

  // Manages what the selected / clicked movie is.
  const [selectedMovie, setSelectedMovie] = useState();

  // Sets the typed input value as the item to be searched in the URL.  It also switches to the Search mode.
  const setSearch = () => {
    // console.log("InputValue recieved in setSearch: " + inputValue);
    const a = inputValue !== "" || " " ? inputValue : "";
    setSearchInURL(a);
    // console.log("setSearch fired with : " + a + " as setSearchInURL");
    setSourceMode(bySearch);
    getMovies();
  };

  // Manages Pagination: Which page of content is being fetched from the server.
  const [page, setPage] = useState(2);

  // These varaibles and hooks manages the Fetch api parameters and viewing mode. Either fetch by Source or by Search.
  const apikey = "ab70d2cf01306700109f002f1cc8938a";

  const byDiscover = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
    mode: "discover",
  };

  const bySearch = {
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInURL}&page=${page}`,
    mode: "search",
  };

  const [sourceMode, setSourceMode] = useState(byDiscover);

  //Switches between Search and Discover Modes
  const changeMode = () => {
    setDiscoverMode(!discoverMode)
    if (sourceMode.mode === "search") {
      setSourceMode(byDiscover);
    } else if (sourceMode.mode === "discover") {
      setSourceMode(bySearch);
    }
    console.log(sourceMode.mode);
    getMovies();
  };

  // MAIN FETCH FUNCTION: Fetches data from the server based on the given mode and parameters.
  const getMovies = async () => {
    try {
      const response = await fetch(sourceMode.url);
      const apiResponse = await response.json();
      setResult(apiResponse);
    } catch (error) {}
  };

  // Pagination: Increments page being sent to api call through setPage.
  const handlePageForward = (currentPage) => {
    if (currentPage > 0 && currentPage < result.total_pages)
      setPage((currentPage) => currentPage + 1);
    console.log("handle page forward " + page);
    getMovies();
  };

  // Pagination: Decrements page being sent to api call through setPage.
  const handlePageBack = (currentPage) => {
    if (currentPage > 1 && currentPage <= result.total_pages)
      setPage((currentPage) => currentPage - 1);
    console.log("handle page back" + page);
    getMovies();
  };

  useEffect(() => {
    console.log("useEffect fired");
    getMovies();
    // console.log(result);
  }, []);

  const goToMovie = (id) => {
    console.log(id);
    setSelectedMovie(id);
  };

  // if (result.results.length == 0) {
  //   return (
  //     <>
  //       {/* <Navbar /> */}
  //       <h2>No Search Results</h2>
  //       <button onClick={getMovies}>Refresh List</button>
  //     </>
  //   );
  // }

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
              discoverMode={discoverMode}
              setDiscoverMode={setDiscoverMode}
            />
            <Movies
              changeMode={changeMode}
              result={result}
              {...result}
              goToMovie={goToMovie}
              handlePageForward={handlePageForward}
              handlePageBack={handlePageBack}
              page={page}
              sourceMode={sourceMode}
              discoverMode={discoverMode}
              setDiscoverMode={setDiscoverMode}
            />
          </Route>

          <Route exact path="/movies">
            <Movies />
          </Route>

          <Route exact path="/selected">
            <SelectedMovie
              result={result}
              {...result}
              selectedMovie={selectedMovie}
              apikey={apikey}
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

/////////////Fixes Needed/////

// Search Discover Swith Delay in activation
//Delay in Pagination
// Result header not changing.

//  Movie and button hovers
// Make everything fully responsive.
//Address need for double click on search
// Take to Netlify
