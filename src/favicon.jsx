import React from "react";
import { useState } from "react";
// import { filledcheck } from "public/filledcheck.png";

const FavIcon = () => {
  // const [text, setText] = useState("notFav");

  const [favStatus, setFavStatus] = useState({
    status: "False",
    icon: `material-icons-outlined`,
  });

  const handleFavClick = () => {
    const { status, icon } = favStatus;
    if (status === "False") {
      setFavStatus({ status: "True", icon: `material-icons` });
    } else {
      setFavStatus({
        status: "False",
        icon: `material-icons-outlined`,
      });
    }
    console.log(status, icon);
  };

  // const handleClick = () => {
  //   if (text === "notFav") {
  //     setText("Fav");
  //   } else {
  //     setText("notFav");
  //   }
  // };

  return (
    <>
      <div>
        <span>
          <img src="public/filledcheck.png" />
        </span>
      </div>
    </>
  );
};
export default FavIcon;
