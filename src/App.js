import "./App.css";
import React, { useEffect, useState } from "react";
import Movies from "./movies";
import Navbar from "./navbar";
import SelectedMovie from "./selected-movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesDem from "./tmdbtest";

function App() {
  const [searchInURL, setSearchInURL] = useState("Halo");
  const [result, setResult] = useState({
    page: 0,
    total_pages: 0,
    results: [],
    total_results: 0,
  });
  const [inputValue, setInputValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState();

  const setSearch = () => {
    // console.log("InputValue recieved in setSearch: " + inputValue);
    const a = inputValue !== "" || " " ? inputValue : "";
    setSearchInURL(a);
    // console.log("setSearch fired with : " + a + " as setSearchInURL");
    setSourceMode(bySearch);
    getMovies();
  };

  const [page, setPage] = useState();
  const apikey = "ab70d2cf01306700109f002f1cc8938a";
  const byDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  const bySearch = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInURL}&page=${page}`;
  const [sourceMode, setSourceMode] = useState(bySearch);

  const getMovies = async () => {
    try {
      const response = await fetch(sourceMode);
      const apiResponse = await response.json();
      setResult(apiResponse);
    } catch (error) {}
  };

  const handlePageForward = (currentpage) => {
    if (currentpage > 0 && currentpage < result.total_pages)
      setPage(currentpage + 1);
    getMovies();

    console.log("handle page forward");
  };

  const handlePageBack = (currentpage) => {
    if (currentpage > 1 && currentpage <= result.total_pages)
      setPage(currentpage - 1);
    getMovies();
    console.log("handle page back");
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

// Add notes and comments for
// Maybe have search and discover mode switch
//Needs parameters on trailersx
//  Movie and button hovers
// Make everything fully responsive.
//Address need for double click on search
// Take to Netlify
