import React from "react";
import WelcomeNote from "./WelcomeNote";
import LeftViewStyles from "../../Styles/LandingpageLeftView/LeftView.module.css";
import UserSearchBar from "./UserSearchBar";
const LeftView = () => {
  const { container, wrapper } = LeftViewStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <WelcomeNote />
        <UserSearchBar />
      </div>
    </div>
  );
};

export default LeftView;
