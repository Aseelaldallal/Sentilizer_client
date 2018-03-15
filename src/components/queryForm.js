import React, { Component } from "react";
import axios from "../axios-sentiment";
import "./queryForm.css";

class QueryForm extends Component {
  state = {
    value: "",
    submitDisabled: true,
    sentiment: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    if (event.target.value.trim() !== "") {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  };

  fetchSentiment = () => {
    axios
      .post("/", {
        sentence: this.state.value
      })
      .then(response => {
        this.setState({ sentiment: response.data });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  handleSubmit = () => {};

  render() {
    let response_div = "";
    if (this.state.sentiment !== "") {
      response_div = (
        <div className="response-wrapper">
          <h3> Sentiment: </h3>
          <div className="response-text">{this.state.sentiment}</div>
        </div>
      );
    }
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
          <button
            type="button"
            disabled={this.state.submitDisabled}
            onClick={this.fetchSentiment}
          >
            Submit
          </button>
        </div>
        {response_div}
      </div>
    );
  }
}

export default QueryForm;
