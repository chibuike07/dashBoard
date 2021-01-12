import React from "react";
import { Route } from "react-router-dom";

import { DashBoardProvider } from "../Context_file/DashBoardContext";
const DashboardRoute = (props) => (
  <DashBoardProvider>
    <Route {...props} />
  </DashBoardProvider>
);

export default DashboardRoute;
