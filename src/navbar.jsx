import React from "react";

// /////This component manages the search input field and button.

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
