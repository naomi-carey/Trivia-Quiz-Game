import "./App.css";
import React, { Component } from "react";
import DisplayQuiz from "./component/DisplayQuiz";
import Button from "./component/Button";

export default class App extends Component {
  state = {
    category: "",
    difficulty: "",
    question: "",
    correctAnswer: "",
    incorrectAnswer: "",
    type: "",
    trivia: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log("I am after componendidmount");

    fetch("https://opentdb.com/api.php?amount=20")
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        this.setState({
          trivia: data,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trivia Quiz Game</h1>
          {this.state.isLoading ? (
            <h2>Loading Questions</h2>
          ) : (
            <DisplayQuiz trivia={this.state.trivia} />
          )}

          {/* {this.state.trivia && <DisplayQuiz trivia={this.state.trivia} />} */}
          {/* {this.state.isLoading ? (
            <h2>Loading Questions...</h2>
          ) : (
            this.state.trivia.length > 0 && (
              <DisplayQuiz trivia={this.state.trivia} />
            )
          )} */}
          <br />
          <Button reloadQuestions={() => this.componentDidMount()} />
        </header>
      </div>
    );
  }
}
