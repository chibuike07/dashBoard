import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashboardRoute from "./Routes/DashboardRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <DashboardRoute path="/" component={LandingPage} exact />
          <DashboardRoute path="/dashboard/" component={LandingPage} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
