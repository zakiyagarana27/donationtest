import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import SignUpForm from "./forms/SignUpForm";
import SignInForm from "./forms/SignInForm";
import Footer from "./header-footer/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <img
              className="logo-img"
              src="Condor_Community_Logo_800X800.png"
            ></img>
          </div>
          <div className="App__Form ">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
              or
              <NavLink
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link "
              >
                SignUp
              </NavLink>
            </div>
            <Route exact path="/sign-up" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
