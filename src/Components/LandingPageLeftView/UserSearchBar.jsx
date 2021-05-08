import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Common/Input.component/Input";
import UserInputStyles from "../../Styles/LandingpageLeftView/UserInput.module.css";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const UserSearchBar = () => {
  const { container, input, icon } = UserInputStyles;
  const [findUser, setfindUser] = useState("");
  const [, setState] = useContext(DashBoardContext);

  useEffect(() => {
    const handleSearchGender = () => {
      if (findUser === "") {
        setState((data) => ({
          ...data,
          gender: "all users",
          tags: "all users",
        }));
      } else {
        setState((data) => ({
          ...data,
          gender: findUser.toLocaleLowerCase(),
          tags: `${findUser} users`,
        }));
      }
    };
    handleSearchGender();

    return [handleSearchGender];
  }, [setState, findUser]);

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
        placeholder="Find a user eg: male, female and all"
        name="user input"
        value={findUser}
        className={input}
        onChange={(e) => setfindUser(e.target.value)}
      />
    </div>
  );
};

export default UserSearchBar;
