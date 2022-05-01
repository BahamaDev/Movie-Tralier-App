import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { useState } from "react";
const Navbar = ({ setInputValue, inputValue, setSearch, setDiscoverMode }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDiscoverMode(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="input-section">
          <input
            type="text"
            className="text-input"
            placeholder="Enter search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={(e) => setSearch(e)}>Search</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
