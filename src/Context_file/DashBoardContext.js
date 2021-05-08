import React, { useState } from "react";

const DashBoardContext = React.createContext([{}, () => {}]);

const DashBoardProvider = (props) => {
  const [Users, setUsers] = useState({
    tags: "all users",
    gender: "all user",
    nationality: "",
    showCountries: false,
    showUsersList: true,
    handleDownColor: true,
    showPreview: false,
    showAllList: true,
    results: 10,
    page: 1,
    specifiedUserData: [],
    usersList: [],
    clonedUsersList: [],
    countries: [],
  });

  return (
    <DashBoardContext.Provider value={[Users, setUsers]}>
      {props.children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardProvider };
