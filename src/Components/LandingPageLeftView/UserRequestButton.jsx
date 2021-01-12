import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import UserRequestButtonStyles from "../../Styles/LandingpageLeftView/UserRequests.module.css";

const UserRequestButton = () => {
  const {
    container,
    text,
    iconWrappers,
    box_1,
    usersWrapper,
    box_2,
    maleWrapper,
    box_3,
    femaaleWrapper,
  } = UserRequestButtonStyles;

  return (
    <div className={container}>
      <div className={text}>
        <h3>show users</h3>
      </div>

      <div className={iconWrappers}>
        <div className={box_1}>
          <div className={usersWrapper}>
            <FontAwesomeIcon icon={faUsers} size="2x" color="#fff" />
          </div>
          <span>all users</span>
        </div>
        <div className={box_2}>
          <div className={maleWrapper}>
            <FontAwesomeIcon icon={faMale} size="2x" color="#fff" />
          </div>
          <span>male users</span>
        </div>

        <div className={box_3}>
          <div className={femaaleWrapper}>
            <FontAwesomeIcon icon={faFemale} size="2x" color="#fff" />
          </div>
          <span>female users</span>
        </div>
      </div>
    </div>
  );
};

export default UserRequestButton;
