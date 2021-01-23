import React from "react";

const Question = ({ i, question }) => {
  return (
    <>
      <div key={i} className="question-container">
        <div className="question-name">
          <div>{question.question}</div>
        </div>
      </div>
    </>
  );
};

export default Question;
