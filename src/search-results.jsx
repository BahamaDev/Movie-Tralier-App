import React from "react";

const Search_Results = ({ ...result }) => {
  return (
    <>
      <div className="search-results">
        {" "}
        <div className="movies-count">
          <p>{result.total_results} </p>{" "}
        </div>{" "}
        <h2 className="movies-count-text">Search Results</h2>
      </div>
    </>
  );
};

export default Search_Results;
