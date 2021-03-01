import React, { useState } from "react";
import useSound from "use-sound";

function DisplayQuizQuestion({ trivia }) {
  //   console.log(trivia.results.length);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  //   console.log(trivia.results[currentQuestion]);

  const handleWrongAnswerButton = () => {
    // console.log(handleWrongAnswerButton);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < trivia.results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleCorrectAnswerButton = () => {
    // console.log(handleCorrectAnswerButton);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < trivia.results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="DisplayQuizQuestion">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {trivia.results.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Question 1 out of {currentQuestion + 1} </span>
              </div>
              <div className="question-text">
                {" "}
                {trivia.results[currentQuestion].question}
              </div>
              <div className="answer-section">
                {trivia.results[currentQuestion].incorrect_answers.map(
                  (incorrectAnswer) => (
                    <button
                      onClick={
                        () => handleWrongAnswerButton()

                        //   trivia.results[currentQuestion].incorrectAnswer
                      }
                    >
                      {incorrectAnswer}
                    </button>
                  )
                )}
              </div>

              <div className="answer-section">
                <button
                  onClick={() => handleCorrectAnswerButton(setScore(score + 1))}
                >
                  {trivia.results[currentQuestion].correct_answer}
                </button>
              </div>

              <div>
                <br />
                {` ${trivia.results[currentQuestion].category}`}
                <br />
                {` Difficulty: ${trivia.results[currentQuestion].difficulty}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DisplayQuizQuestion;
