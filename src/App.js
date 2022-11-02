import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactList from "./Components/ContactList/ContactList";
import Profil from "./Components/Profil/Profil";
import NavBar from "./Components/NavBar/NavBar";
import Signin from "./Components/Signin/Signin";
import PrivateRoute from "./Route/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/profil" component={Profil} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
