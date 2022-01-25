import React, { useState } from "react";
//import useSound from "use-sound";
//import woosh from "../sounds/woosh.mp3";
import styled from "styled-components";

export default function DisplayQuizQuestion({ trivia }) {
  //   console.log(trivia.results.length);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  //   console.log(trivia.results[currentQuestion]);

  const HandleWrongAnswerButton = () => {
    // console.log(handleWrongAnswerButton);
    // const [play] = useSound(woosh);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < trivia.results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const HandleCorrectAnswerButton = () => {
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
          <ScoreSection>
            You scored {score} out of {trivia.results.length}
          </ScoreSection>
        ) : (
          <div>
            <QuestionSection>
              <QuestionCount>
                <span>Question 1 out of {currentQuestion + 1} </span>
              </QuestionCount>
              <QuestionText>
                {" "}
                {trivia.results[currentQuestion].question}
              </QuestionText>
              <AnswerSection>
                {trivia.results[currentQuestion].incorrect_answers.map(
                  (incorrectAnswer) => (
                    <Button
                      onClick={
                        () => HandleWrongAnswerButton()

                        //   trivia.results[currentQuestion].incorrectAnswer
                      }
                    >
                      {incorrectAnswer}
                    </Button>
                  )
                )}
              </AnswerSection>

              <AnswerSection>
                <Button
                  onClick={() => HandleCorrectAnswerButton(setScore(score + 1))}
                >
                  {trivia.results[currentQuestion].correct_answer}
                </Button>
              </AnswerSection>

              <div>
                <br />
                {` ${trivia.results[currentQuestion].category}`}
                <br />
                {` Difficulty: ${trivia.results[currentQuestion].difficulty}`}
              </div>
            </QuestionSection>
          </div>
        )}
      </div>
    </>
  );
}

const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
  :hover {
    background-color: #555e7d;
  }

  :focus {
    outline: none;
  }
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;
  font-size: 28px;
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
`;

// const CorrectAnswerColor = styled.div`
//   background-color: ${(props) => (props.clicked ? "green" : "red")};
// `;

// export default DisplayQuizQuestion;
