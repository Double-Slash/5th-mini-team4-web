import React, { useState } from "react";

import "./Answers.css";
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
//카테고리 -> 질문 제목, 사용자 및 댓글 정보..
const Answers = ({ questions }) => {
  const [accordion, setAccordion] = useState(true);
  const onClick = () => {};


  return (
    <>
      <div className="questions">
        {questions.map((questions) => (
          <div className="question_wrap">
            <div className="question" >{questions.question}</div>
            
            <div className="accordion" onClick={() => setAccordion(!accordion)}>
                  <img
                    alt="accordion"
                    src={accordion ? chevronup : chevrondown}
                  />
            </div>

            {questions.answers.map((answers) => (
              <div className={ accordion ? 'answers_wrap category-open' : 'answers_wrap category-close'}>
                <div className="writer" onClick={onClick}>
                  {answers.writer}
                </div>{" "}
                <div className="answer">{answers.answer}</div>
                
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Answers;
