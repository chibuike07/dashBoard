import React, { useState } from "react";

const DashBoardContext = React.createContext([{}, () => {}]);

const DashBoardProvider = (props) => {
  const [Users, setUsers] = useState({
    usersList: [],
    countries: [],
  });

  return (
    <DashBoardContext.Provider
      //assign the provider values
      value={[Users, setUsers]}
    >
      {props.children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardProvider };
