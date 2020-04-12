import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Appointment from "./components/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import AppointDashboard from "./components/Dashboard/AppointDashboard";
import PatientDashboard from "./components/Dashboard/PatientDashboard";
import SettingDashboard from "./components/Dashboard/SettingDashboard";
import PrescriptionDashboard from "./components/Dashboard/PrescriptionDashboarde";

function App() {
  return (
    <div className="App">
        <Router>
     

        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/appointment">
            <AppointDashboard></AppointDashboard>
          </Route>
          <Route path="/dashboard/patient">
            <PatientDashboard></PatientDashboard>
          </Route>
          <Route path="/dashboard/setting">
            <SettingDashboard></SettingDashboard>
          </Route>
          <Route path="/dashboard/prescription">
            <PrescriptionDashboard></PrescriptionDashboard>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
