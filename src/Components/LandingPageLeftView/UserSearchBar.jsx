import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Common/Input.component/Input";
import UserInputStyles from "../../Styles/LandingpageLeftView/UserInput.module.css";

const UserSearchBar = () => {
  const { container, input, icon } = UserInputStyles;
  const [findUser, setfindUser] = useState("");
  return (
    <div className={container}>
      <Input
        icon={
          <FontAwesomeIcon
            icon={faSearch}
            className={icon}
            color="#fff"
            opacity={findUser ? 0 : 1}
          />
        }
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
