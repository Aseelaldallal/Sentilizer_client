import React from "react";
import { Component } from "react-dom";

class QueryFrom extends Component {
  state = {
      value=''
  };

  render() {
    return (
      <div className="query-page-werapper">
        <h1 className="page-heading">Sentilizer Welcomes You :) </h1>
        <div className="query-form-wrapper">
          <label>Enter text to analyze its sentiment </label>
          <textarea id="sentiment" value={this.state.value} />
        </div>
      </div>
    );
  }
}
