import React, { Component } from "react";

const Switch = ({ discoverMode, setDiscoverMode, getMovies }) => {
  const makeChange = () => {
    setDiscoverMode(!discoverMode);
    // getMovies();
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
