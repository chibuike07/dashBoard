import React from "react";
import CountryDropDown from "./CountryDropDown";
import TopViewStyles from "../../Styles/UserLists/TopView.module.css";
import ToggleCountryVisiblity from "./ToggleCountryVisiblity";
import FindInUser from "./FindInListuser";

const TopViews = () => {
  const { overallContainer, tag, note, container } = TopViewStyles;

  return (
    <div className={overallContainer}>
      <div className={tag}>
        <h2>all user</h2>
      </div>
      <div className={note}>
        <span>Filter by</span>
      </div>
      <div className={container}>
        <FindInUser />
        <CountryDropDown />
        <ToggleCountryVisiblity />
      </div>
    </div>
  );
};

export default TopViews;
