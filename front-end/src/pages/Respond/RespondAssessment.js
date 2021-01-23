import React, { useState } from "react";
import Categories from "../../components/Respond/Categories";
import "./RespondAssessment.css";
import { SendAltFilled16 } from "@carbon/icons-react";

const RespondAssessment = () => {
  // 평가 상태
  const [list, setList] = useState({
    categories: [
      {
        category: "개발",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "short",
          },
        ],
      },
      {
        category: "기획",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "long",
          },
        ],
      },
      {
        category: "디자인",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "yesOrNo",
          },
        ],
      },
    ],
  });
  // 응답 모음
  const [answers, setAnswers] = useState([]);
  return (
    <div className="assessment-response-container">
      <div className="title-wrapper">
        <div className="title">타이틀</div>
      </div>
      <div className="assessment-wrapper">
        <Categories list={list} answers={answers} setAnswers={setAnswers} />
      </div>
      <div className="button-container">
        <div className="next-button-wrapper">
          <button>다음 단계</button>
          <SendAltFilled16 />
        </div>
      </div>
    </div>
  );
};

export default RespondAssessment;
