import React from "react";
import UserLists from "../../Components/UserLists/UserLists";
import UserListPageStyles from "../../Styles/UserLists/UserListPage.module.css";
import DisplayUsersCard from "../../Components/DisplayUserListComponent/DisplayUsersCard";
const UserListPage = () => {
  const { container, wrapper } = UserListPageStyles;

  return (
    <div className={container}>
      <div className={wrapper}>
        <UserLists />
        <DisplayUsersCard />
      </div>
    </div>
  );
};

export default UserListPage;
