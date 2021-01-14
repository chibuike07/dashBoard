import React, { useContext } from "react";
import UserLists from "../../Components/UserLists/UserLists";
import UserListPageStyles from "../../Styles/UserLists/UserListPage.module.css";
import DisplayUsersCard from "../../Components/DisplayUserListComponent/DisplayUsersCard";

import PreviewUser from "../../Components/DisplaySpecifiedUser/PreviewUser";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const UserListPage = ({ history }) => {
  const { container, wrapper } = UserListPageStyles;
  const [{ showUsersList }] = useContext(DashBoardContext);
  return (
    <div className={container}>
      <div className={wrapper}>
        <UserLists />
        {showUsersList ? <DisplayUsersCard /> : <PreviewUser />}
      </div>
    </div>
  );
};

export default UserListPage;
