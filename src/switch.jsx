import React, { Component } from "react";

const Switch = ({ changeMode, discoverMode }) => {
  return (
    <>
      <div className="switch-container">
        {" "}
        <div className="switch-opt">Search</div>
        <label className="switch">
          <input onChange={changeMode} checked={discoverMode} type="checkbox" />
          <span className="slider" />
        </label>
        <div className="switch-opt"> Discover </div>
      </div>
    </>
  );
};

export default Switch;
