import React, { useState } from "react";
import "./Answers.css";
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
//카테고리 -> 질문 제목, 사용자 및 댓글 정보..
const Answers = ({ question, answers }) => {
  const [accordion, setAccordion] = useState(true);

  return (
    <>
      <div className="questions">
        <div className="question_wrap">
          <div className="question">{question}</div>
          <div className="accordion" onClick={()=> setAccordion(!accordion)}>
            <img alt="accordion" src={accordion ? chevronup : chevrondown} />
          </div>

          {answers.map((answers, index) => (
            <div className={accordion ? "open" : "close"}>
              <div className="writer">{answers.writer}</div>{" "}
              <div className="answer">{answers.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Answers;
