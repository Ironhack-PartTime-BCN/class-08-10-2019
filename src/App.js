import React, { Component } from "react";
import { min, securePass } from "./helpers";

const validations = {
  username: min,
  password: securePass
};
class Form extends Component {
  state = {
    values: {
      username: "",
      password: ""
    },
    errors: {
      username: false,
      password: false
    }
  };

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: !validations[e.target.name](e.target.value)
      }
    });
  };

  handleSubmit = () => {
    // if (errors) {
    // } else {
    //   fasidfa;
    // }
  };

  handleBlur = () => {
    console.log("Blurrrrr");
  };

  render() {
    const {
      values: { username, password },
      errors: { username: errorUsername, password: errorPassword }
    } = this.state;
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="username">username</label>
          <input
            className={errorUsername && "error"}
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="password">password</label>
          <input
            className={errorPassword && "error"}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default Form;
