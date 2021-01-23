import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const Questions = ({ questions, answers, setAnswers }) => {
  return (
    <>
      {questions?.map((question, i) => (
        <>
          <Question i={i} question={question} />
          <Answer
            i={i}
            type={question.questionType}
            answers={answers}
            setAnswers={setAnswers}
          />
        </>
      ))}
    </>
  );
};

export default Questions;
