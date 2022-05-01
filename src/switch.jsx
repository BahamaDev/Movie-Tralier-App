import React from "react";
// //// This component manages only the mode switch and its functionality.

const Switch = ({ discoverMode, setDiscoverMode, getMovies }) => {
  const makeChange = () => {
    setDiscoverMode(!discoverMode);
    console.log("changed mode to " + discoverMode);
  };

  return (
    <>
      <div className="switch-container">
        {" "}
        <div className="switch-opt">Search</div>
        <label className="switch">
          <input
            onChange={() => makeChange()}
            checked={discoverMode}
            type="checkbox"
          />
          <span className="slider" />
        </label>
        <div className="switch-opt"> Discover </div>
      </div>
    </>
  );
};

export default Switch;
