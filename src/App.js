import "./App.css";
import React, { Component } from "react";
import DisplayQuiz from "./component/DisplayQuiz";

export default class App extends Component {
  state = {
    category: "",
    difficulty: "",
    question: "",
    correctAnswer: "",
    incorrectAnswer: "",
    type: "",
    trivia: [],
  };

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=20")
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        this.setState({
          trivia: data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trivia Quiz Game</h1>
          {this.state.trivia && <DisplayQuiz trivia={this.state.trivia} />}
        </header>
      </div>
    );
  }
}
