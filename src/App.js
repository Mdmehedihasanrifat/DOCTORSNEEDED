import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NavbarDark from "./components/Shared/Navbar/NavbarDark";
import DoctorList from "./components/Dashboard/DoctorList/DoctorList";
import Heart from "./components/Heart";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path='/'>
<NavbarDark></NavbarDark>
            <Home></Home>
          </Route>

          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>

          <PrivateRoute path='/dashboard/appointment'>
            <Dashboard></Dashboard>
          </PrivateRoute>

            <Route path='/heart'>
                <Heart></Heart>
            </Route>


            <Route path='/dashboard/allPatients'>
            <AllPatients></AllPatients>
          </Route>

          <Route path='/addDoctor'>
            <AddDoctor></AddDoctor>
          </Route>
            <Route path='/doctor'>
                <DoctorList></DoctorList>
            </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
