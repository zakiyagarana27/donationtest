import React, { Component } from "react";
import { Link } from "react-router-dom";

const IntialState = {
  email: "",
  password: "",
  email_err: "",
  password_err: "",
};

class SignInForm extends Component {
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
    let email_err = "";
    let password_err = "";

    if (this.state.email == "") {
      email_err = "Please enter an email address";
    }
    if (email_err) {
      this.setState({ email_err });
      return false;
    }

    // if (this.state.password_err == "") {
    //   password_err = "Please enter a password";
    // }
    // if (password_err) {
    //   this.setState({ password_err });
    //   return false;
    // }

    return true;
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log("Following data is submited: ");
      console.log(this.state);
      this.setState(IntialState);
    }
  }
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
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
            <div>{this.state.email_err}</div>
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
            <div>{this.state.password_err}</div>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20"> Sign In </button>
            <Link to="/sign-up" className="FormField__Link">
              Become a member now!
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
