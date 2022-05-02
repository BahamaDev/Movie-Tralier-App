import "./App.css";
import React, { useEffect, useState } from "react";
import Movies from "./movies";
import Navbar from "./navbar";
import SelectedMovie from "./selected-movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //Manages the value of the final value to be inserted into the URL in Search search Mode
  const [searchInURL, setSearchInURL] = useState("Halo");
  const [discoverMode, setDiscoverMode] = useState(true);

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
    setDiscoverMode(false);
    getMovies();
    const a = inputValue !== "" || " " ? inputValue : "";
    setSearchInURL(a);
  };

  // Manages Pagination: Which page of content is being fetched from the server.
  const [page, setPage] = useState(1);

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

  // MAIN FETCH FUNCTION: Fetches data from the server based on the given mode and parameters.
  const getMovies = async () => {
    try {
      const response = await fetch(
        discoverMode ? byDiscover.url : bySearch.url
      );
      const apiResponse = await response.json();

      setResult(apiResponse);
    } catch (error) {}
  };

  console.log(result);
  // Pagination: Increments page being sent to api call through setPage.
  const handlePageForward = () => {
    if (page > 0 && page < result.total_pages) setPage(() => page + 1);
    console.log("handle page forward " + page);
    // getMovies();
  };

  // Pagination: Decrements page being sent to api call through setPage.
  const handlePageBack = () => {
    if (page > 1 && page <= result.total_pages) setPage(() => page - 1);
    console.log("handle page back" + page);
    // getMovies();
  };

  useEffect(() => {
    setInputValue("");
    getMovies();
    console.log(result);
  }, [discoverMode, page, searchInURL]);

  // Allows movie to be selected, and its summary to be accessed in selected movie component.
  const goToMovie = (id) => {
    console.log(id);
    setSelectedMovie(id);
  };

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
              getMovies={getMovies}
            />
            <Movies
              result={result}
              {...result}
              goToMovie={goToMovie}
              handlePageForward={handlePageForward}
              handlePageBack={handlePageBack}
              page={page}
              discoverMode={discoverMode}
              setDiscoverMode={setDiscoverMode}
              getMovies={getMovies}
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
        </Switch>
      </main>
    </Router>
  );
}

export default App;

// Make everything fully responsive.
// Take to Netlify
