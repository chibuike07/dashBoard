import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import UserRequestButtonStyles from "../../Styles/LandingpageLeftView/UserRequests.module.css";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

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

  const [, setState] = useContext(DashBoardContext);

  const handleGender = (id) => {
    switch (id) {
      case "male":
        setState((data) => ({
          ...data,
          gender: id,
          tags: "male users",
        }));
        break;

      case "female":
        setState((data) => ({
          ...data,
          gender: id,
          tags: "female users",
        }));
        break;

      case "all user":
        setState((data) => ({
          ...data,
          gender: id,
          tags: "all users",
        }));
        break;

      default:
        setState((data) => ({
          ...data,
          gender: id,
          tags: "all users",
        }));
        break;
    }
  };
  return (
    <div className={container}>
      <div className={text}>
        <h3>show users</h3>
      </div>

      <div className={iconWrappers}>
        <div className={box_1}>
          <div
            className={usersWrapper}
            id="all user"
            onClick={(e) => handleGender(e.target.id)}
          >
            <FontAwesomeIcon icon={faUsers} size="2x" color="#fff" />
          </div>
          <span>all users</span>
        </div>
        <div className={box_2}>
          <div
            className={maleWrapper}
            id="male"
            onClick={(e) => handleGender(e.target.id)}
          >
            <FontAwesomeIcon icon={faMale} size="2x" color="#fff" />
          </div>
          <span>male users</span>
        </div>

        <div className={box_3}>
          <div
            className={femaaleWrapper}
            id="female"
            onClick={(e) => handleGender(e.target.id)}
          >
            <FontAwesomeIcon icon={faFemale} size="2x" color="#fff" />
          </div>
          <span>female users</span>
        </div>
      </div>
    </div>
  );
};

export default UserRequestButton;
