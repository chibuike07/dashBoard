import React, { useState } from "react";

const DashBoardContext = React.createContext([{}, () => {}]);

const DashBoardProvider = (props) => {
  const [Users, setUsers] = useState({
    usersList: [],
    countries: [],
    showCountries: false,
    showUsersList: true,
    tags: "all user",
    specifiedUserData: [],
  });

  return (
    <DashBoardContext.Provider value={[Users, setUsers]}>
      {props.children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardProvider };
