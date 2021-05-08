import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "../../Common/Input.component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FindInUserStyles from "../../Styles/UserLists/FindInUser.module.css";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const FindInListuser = () => {
  const { container, icon, input } = FindInUserStyles;
  const [{ usersList, clonedUsersList }, setState] = useContext(
    DashBoardContext
  );
  const [user, setuser] = useState("");

  const handleChange = (name) => {
    setuser(name);
    name === ""
      ? setState((data) => ({ ...data, usersList: clonedUsersList }))
      : usersList &&
        setState((data) => ({
          ...data,
          usersList: usersList.filter((v) =>
            v.name.first.toLowerCase().includes(name)
          ),
        }));
  };

  return (
    <div className={container}>
      <Input
        icon={
          <FontAwesomeIcon
            icon={faSearch}
            className={icon}
            color="#ccc"
            opacity={user ? 0 : 1}
          />
        }
        type="text"
        name="user"
        placeholder="find in list"
        value={user}
        onChange={(e) => handleChange(e.target.value)}
        className={input}
      />
    </div>
  );
};

export default FindInListuser;
