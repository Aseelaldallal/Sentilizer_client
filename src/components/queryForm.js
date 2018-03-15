import React, { Component } from "react";
import "./queryForm.css";

class QueryForm extends Component {
  state = {
    value: "",
    submitDisabled: true
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    if (event.target.value.trim() !== "") {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className="query-page-werapper">
        <h1 className="page-heading">Sentilizer Welcomes You :) </h1>
        <div className="query-form-wrapper">
          <label>Enter text to analyze its sentiment </label>
          <textarea
            id="sentiment"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="button" disabled={this.state.submitDisabled}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default QueryForm;
