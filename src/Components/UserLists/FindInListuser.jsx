import React, { useState } from "react";
import Input from "../../Common/Input.component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FindInUserStyles from "../../Styles/UserLists/FindInUser.module.css";

const FindInListuser = () => {
  const { container, icon, input } = FindInUserStyles;

  const [user, setuser] = useState("");
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
        onChange={(e) => setuser(e.target.value)}
        className={input}
      />
    </div>
  );
};

export default FindInListuser;
