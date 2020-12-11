import React, { Component } from "react";
import { Link } from "react-router-dom";

const IntialState = {
  name: "",
  email: "",
  password: "",
  name_err: "",
  email_err: "",
  password_err: "",
};
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = IntialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  validate = () => {
    let name_err = "";
    let email_err = "";
    let password_err = "";

    if (this.state.email == "") {
      email_err = "Please enter an email address";
    }
    if (email_err) {
      this.setState({ email_err });
      return false;
    }

    if (this.state.password_err == "") {
      password_err = "Please enter a password";
    }
    if (password_err) {
      this.setState({ password_err });
      return false;
    }

    return true;
  };
  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log("Following data is submited: ");
      console.log(this.state);
    }
  }
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter Your Name Here!"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter Your Password Here!"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter Your Email Here!"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20"> Sign Up </button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
