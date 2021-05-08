import React, { useState } from "react";

const DashBoardContext = React.createContext([{}, () => {}]);

const DashBoardProvider = (props) => {
  const [Users, setUsers] = useState({
    usersList: [],
    clonedUsersList: [],
    countries: [],
    showCountries: false,
    showUsersList: true,
    tags: "all users",
    gender: "all user",
    results: 10,
    page: 1,
    handleDownColor: true,
    showPreview: false,
    showAllList: true,
    specifiedUserData: [],
  });

  return (
    <DashBoardContext.Provider value={[Users, setUsers]}>
      {props.children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardProvider };
