import React from "react";
import { useState } from "react";
import { TiHeartOutline, TiHeart } from "react-icons/ti";

// ////This component manages only the favicon.

const FavIcon = () => {
  const [favStatus, setFavStatus] = useState({
    status: "False",
    icon: <TiHeartOutline />,
  });

  const handleFavClick = () => {
    const { status, icon } = favStatus;
    if (status === "False") {
      setFavStatus({ status: "True", icon: <TiHeart /> });
    } else {
      setFavStatus({
        status: "False",
        icon: <TiHeartOutline />,
      });
    }
    console.log(status, icon);
  };

  return (
    <>
      {" "}
      <div className="movie-card-icon">
        <span onClick={handleFavClick} className="fav-button">
          {favStatus.icon}
        </span>
      </div>
    </>
  );
};
export default FavIcon;
