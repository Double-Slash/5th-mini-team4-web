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
            question: "하정인의 코드 퀄리티는 어떤가?",
            questionType: "yesOrNo",
          },
          {
            question: "하정인의 코드 검토 능력은 어떤가?",
            questionType: "short",
          },
          {
            question: "하정인의 코드 수정능력은 어떤가?",
            questionType: "score",
          },
        ],
      },
      {
        category: "기획",
        questions: [
          {
            question: "하정인의 아이디어 창출 능력은 어떠한가?",
            questionType: "long",
          },
          {
            question: "하정인의 자료 및 정보 확보 능력에 대해서 어떻게 생각하는가?",
            questionType: "long",
          },
          {
            question: "하정인의 자료 정리 및 편집능력에 대해서 어떻게 생각하는가?",
            questionType: "score",
          },
        ],
      },
      {
        category: "디자인",
        questions: [
          {
            question: "하정인의 조형과 색채 사용능력은 어떤가?",
            questionType: "long",
          },
          {
            question: "하정인의 서체선택과 활용능력은 어떤가?",
            questionType: "long",
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
        <div className="title">하정인 기획&개발&디자인 능력 설문</div>
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
