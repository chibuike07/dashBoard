import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashboardRoute from "./Routes/DashboardRoute";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DashboardRoute path="/" component={LandingPage} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
