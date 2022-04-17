import React, { Component } from "react";
import { useState } from "react";
const Navbar = ({ setInputValue, inputValue, setSearch }) => {
  return (
    <>
      <div className="navbar">
        <div className="input-section">
          <input
            type="text"
            className="text-input"
            placeholder="Enter search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={(e) => setSearch(e)}>Search</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
