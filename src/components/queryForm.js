import React, { Component } from "react";
import "./queryForm.css";

class QueryForm extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div className="query-page-werapper">
        <h1 className="page-heading">Sentilizer Welcomes You :) </h1>
        <div className="query-form-wrapper">
          <label>Enter text to analyze its sentiment </label>
          <textarea id="sentiment" value={this.state.value} />
          <button type="button"> Submit </button>
        </div>
      </div>
    );
  }
}

export default QueryForm;
