import React from "react";
import UserSearchBar from "../LandingPageLeftView/UserSearchBar";
import CountryDropDown from "./CountryDropDown";
import TopViewStyles from "../../Styles/UserLists/TopView.module.css";

const TopViews = () => {
  const { container } = TopViewStyles;
  return (
    <div className={container}>
      <UserSearchBar
        contWidth="40%"
        minWidth="100px"
        inputMinWidth="240px"
        inputWidth="20vw"
      />
      <CountryDropDown />
    </div>
  );
};

export default TopViews;
