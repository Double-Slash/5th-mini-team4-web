import React, { useState } from "react";
import "../../css/Answers.css";
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
import Writer from "./Writer";

//카테고리 -> 질문 제목, 사용자 및 댓글 정보..
const Answers = ({ question, answers, onClick }) => {
  const [accordion, setAccordion] = useState(true);

  return (
    <>
    {/* 질문 제목출력 */}
      <div className="questions">
        <div className="question_wrap">
          <div className="accordin_wrap">
            <div className="question">{question}</div>
            <div className="accordion" onClick={() => setAccordion(!accordion)}>
              <img alt="accordion" src={accordion ? chevronup : chevrondown} />
            </div>
          </div>

          {/* 사용자와 댓글 하위 컴포넌트로 전달해서 출력 */}
          {answers.map((answers, index) => (
            <div className={accordion ? "open" : "close"}>
             <Writer answers={answers} onClick={onClick}></Writer>
            </div>
          ))}


        </div>
      </div>
    </>
  );
};

export default Answers;
