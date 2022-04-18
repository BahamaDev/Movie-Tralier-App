import React from "react";
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
}) => {
  console.log(result);

  const { total_results, page, total_pages } = { ...result };

  return (
    <>
      <div className="movies-header">
        <Switch changeMode={changeMode} />
        <Search_Results results={result} total_results={total_results} />
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
