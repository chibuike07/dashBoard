import React from "react";
import LandingpageStyles from "../../Styles/LandingpageLeftView/LandingPage.module.css";
import LeftView from "../../Components/LandingPageLeftView/LeftView";
import UserListPage from "../UsersListpage/UserListPage";

const LandingPage = () => {
  const { container, wrapper } = LandingpageStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <LeftView />
        <UserListPage />
      </div>
    </div>
  );
};

export default LandingPage;
