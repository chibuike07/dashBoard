import React from "react";
import UserLists from "../../Components/UserLists/UserLists";
import UserListPageStyles from "../../Styles/UserLists/UserListPage.module.css";
const UserListPage = () => {
  const { container, wrapper } = UserListPageStyles;

  return (
    <div className={container}>
      <div className={wrapper}>
        <UserLists />
      </div>
    </div>
  );
};

export default UserListPage;
