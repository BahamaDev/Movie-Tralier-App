import React, { Component } from "react";

const Switch = () => {
  return (
    <>
      <div className="switch-container">
        {" "}
        <div className="switch-opt">Search</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
        <div className="switch-opt"> Discover </div>
      </div>
    </>
  );
};

export default Switch;
