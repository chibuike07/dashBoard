import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Common/Input.component/Input";
import UserInputStyles from "../../Styles/LandingpageLeftView/UserInput.module.css";

const UserSearchBar = ({
  contWidth = "80%",
  minWidth = "300px",
  inputWidth = "30vw",
  inputMinWidth = "300px",
  backgroundColor = "rgb(60, 63, 84)",
}) => {
  const { container, input, icon } = UserInputStyles;
  const [findUser, setfindUser] = useState("");
  return (
    <div className={container} style={{ width: contWidth, minWidth: minWidth }}>
      <Input
        icon={
          <FontAwesomeIcon
            icon={faSearch}
            className={icon}
            color="#fff"
            opacity={findUser ? 0 : 1}
          />
        }
        backgroundColor={backgroundColor}
        width={inputWidth}
        minWidth={inputMinWidth}
        placeholder="Find a user"
        name="user input"
        value={findUser}
        className={input}
        onChange={(e) => setfindUser(e.target.value)}
      />
    </div>
  );
};

export default UserSearchBar;
