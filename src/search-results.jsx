import React, { useEffect } from "react";


const Search_Results = ({  discoverMode, ...result }) => {
  const searchConfig = (
    <div className="search-results">
      {" "}
      <div className="movies-count">
        <p>{result.total_results} </p>{" "}
      </div>{" "}
      <h2 className="movies-count-text">Search Results</h2>
    </div>
  );

  const discoverConfig = <h2 className="discover-text">Discover New Movies</h2>;

 

  return (
    <>
      {/* <div>{barConfig}</div> */}
      <div>
        <h2 className="discover-text">
          {discoverMode ? discoverConfig : searchConfig}
        </h2>
      </div>
    </>
  );
};

export default Search_Results;
