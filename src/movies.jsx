import React, { useState } from "react";
import Movie from "./movie";
import Switch from "./switch";
import Search_Results from "./search-results";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";

const Movies = ({
  result,
  goToMovie,
  handlePageForward,
  handlePageBack,
  changeMode,
  sourceMode,
  discoverMode
}) => {
  // console.log(result);

  const currentPage = result.page

  const { total_results, page, total_pages } = { ...result };

  return (
    <>
      <div className="movies-header">
        <Switch changeMode={changeMode} discoverMode={discoverMode} />
        <Search_Results
          changeMode={changeMode}
          sourceMode={sourceMode}
          results={result}
          total_results={total_results}
          discoverMode={discoverMode}
        />
        <div className="pagination-section">
          <div
            type="button"
            className="page-button back"
            onClick={() => handlePageBack(currentPage)}
          >
            <TiChevronLeft />
          </div>

          <div className="page-number">
            {result.page} of {result.total_pages}
          </div>

          <div
            className="page-button forward"
            onClick={() => handlePageForward(page)}
          >
            <TiChevronRight />
          </div>
        </div>
      </div>
      <div className="movies-list">
        {result.results.map((item) => {
          // console.log(item);
          return <Movie key={item.id} {...item} goToMovie={goToMovie}></Movie>;
        })}
      </div>
    </>
  );
};

export default Movies;
