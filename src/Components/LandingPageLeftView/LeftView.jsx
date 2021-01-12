import React from "react";
import WelcomeNote from "./WelcomeNote";
import LeftViewStyles from "../../Styles/LandingpageLeftView/LeftView.module.css";
const LeftView = () => {
  const { container, wrapper } = LeftViewStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <WelcomeNote />
      </div>
    </div>
  );
};

export default LeftView;
