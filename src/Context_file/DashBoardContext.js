import React, { useState } from "react";

const DashBoardContext = React.createContext([{}, () => {}]);

const DashBoardProvider = (props) => {
  const [Users, setUsers] = useState({
    usersList: [],
    countries: [],
    showCountries: false,
    showUsersList: true,
    tags: "all users",
    gender: "all user",
    results: 10,
    page: 1,
    format: "json",
    specifiedUserData: [],
  });

  return (
    <DashBoardContext.Provider value={[Users, setUsers]}>
      {props.children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardProvider };
