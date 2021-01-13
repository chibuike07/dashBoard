import React from "react";
import WelcomeNote from "./WelcomeNote";
import LeftViewStyles from "../../Styles/LandingpageLeftView/LeftView.module.css";
import UserSearchBar from "./UserSearchBar";
import UserRequestButton from "./UserRequestButton";
const LeftView = () => {
  const { container, wrapper } = LeftViewStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <WelcomeNote />
        <UserSearchBar contWidth="80%" />
        <UserRequestButton />
      </div>
    </div>
  );
};

export default LeftView;
