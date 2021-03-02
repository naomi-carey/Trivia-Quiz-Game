import React from "react";
import styled from "styled-components";

const Button = ({ reloadQuestions }) => {
  return (
    <div>
      <ReloadButton className="button" onClick={reloadQuestions}>
        Reload Questions
      </ReloadButton>
    </div>
  );
};

const ReloadButton = styled.button`
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
`;

export default Button;
