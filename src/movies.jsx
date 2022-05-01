import React from "react";
import Movie from "./movie";
import Switch from "./switch";
import Search_Results from "./search-results";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";

// ///// This component organizes the collection of movies and their navigation componenets.

const Movies = ({
  result,
  goToMovie,
  handlePageForward,
  handlePageBack,
  sourceMode,
  discoverMode,
  setDiscoverMode,
  getMovies,
}) => {
  // console.log(result);

  const { total_results } = { ...result };

  return (
    <>
      <div className="movies-header">
        <Switch
          discoverMode={discoverMode}
          setDiscoverMode={setDiscoverMode}
          getMovies={getMovies}
        />
        <Search_Results
          sourceMode={sourceMode}
          results={result}
          total_results={total_results}
          discoverMode={discoverMode}
        />
        <div className="pagination-section">
          <div
            type="button"
            className="page-button back"
            onClick={() => handlePageBack()}
          >
            <TiChevronLeft />
          </div>

          <div className="page-number">
            {result.page} of {result.total_pages}
          </div>

          <div
            className="page-button forward"
            onClick={() => handlePageForward()}
          >
            <TiChevronRight />
          </div>
        </div>
      </div>
      <div className="movies-list">
        {result.results.map((item) => {
      
          return <Movie key={item.id} {...item} goToMovie={goToMovie}></Movie>;
        })}
      </div>
    </>
  );
};

export default Movies;
