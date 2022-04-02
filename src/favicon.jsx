import React from "react";
import { useState } from "react";

const FavIcon = () => {
  const [fav, setFav] = useState({ favStatus: "True", favText: "Favorite" });

  const handleClick = ({ ...fav }) => {
    if (fav.favStatus === "True") {
      setFav({ ...fav, favText: "Favorite" });
    } else {
      setFav({ favStatus: "False", favText: "NotFav" });
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {fav.favText}
      </button>
    </>
  );giut 
};
export default FavIcon;
