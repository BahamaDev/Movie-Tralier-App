import React from "react";
import Movie from "./movie";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";

const Movies = ({ result, goToMovie, handlePageForward, handlePageBack }) => {
  console.log(result);

  const { total_results, page, total_pages } = { ...result };


  return (
    <>
      <div className="movies-header">
        <div className="search-results">
          <h2>
            {" "}
            <span className="movies-count"> {result.total_results} </span>{" "}
            Search Results{" "}
          </h2>
        </div>

        <div className="pagination-section">
          <div
            type="button"
            className="page-button back"
            onClick={() => handlePageBack(result.page)}
          >
            <TiChevronLeft />
          </div>

          <div className="page-number">
            {result.page} of {result.total_pages}
          </div>

          <div
            className="page-button forward"
            onClick={() => handlePageForward(result.page)}
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
