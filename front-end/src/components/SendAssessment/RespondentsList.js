import React, { useState, useRef } from "react";
import "../../css/SendAssessment.css";
import { ChevronRight32 } from "@carbon/icons-react";
import CreateRespondents from "./CreateRespondents";
import Respondent from "./Respondent";

function RespondentsList() {
  const [list, setList] = useState({
    categories: [
      {
        category: "개발",
        questions: [
          {
            question: {
              title: "개발이 괜찮나?",
              answers: [
                {
                  type: "short",
                },
                {
                  type: "number",
                },
              ],
            },
          },
        ],
      },
      {
        category: "기획",
        questions: [
          {
            question: {
              title: "기획이 괜찮나?",
              answers: [
                {
                  type: "short",
                },
                {
                  type: "number",
                },
              ],
            },
          },
        ],
      },
      {
        category: "디자인",
        questions: [
          {
            question: {
              title: "디자인이 괜찮나?",
              answers: [
                {
                  type: "short",
                },
                {
                  type: "number",
                },
              ],
            },
          },
        ],
      },
    ],
  });

  console.log(list.categories.questions);

  const [respondents, setRespondents] = useState([
    {
      id: 1,
      email: "aaa@naver.com",
    },
    {
      id: 2,
      email: "bbb@naver.com",
    },
  ]);

  const [input, setInput] = useState("");

  const nextid = useRef(3);
  const keyPressed = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);

      const respondent = {
        id: nextid.current,
        email: e.target.value,
      };
      setRespondents([...respondents, respondent]);
      nextid.current = nextid.current + 1;

      e.target.value = "";
    }
  };

  const onRemove = (id) => {
    setRespondents(respondents.filter((respondents) => respondents.id !== id));
  };

  return (
    <div className="assessment-send-container">
      <div className="assessment-title">
        <label>기획&개발&디자인 능력 설문</label>
      </div>
      <div className="respondents-container">
        <div className="email-title">
          <label>이메일</label>
        </div>

        {list.categories.map((item) => (
          <>
            <div className="category-title">
              <label>{item.category}</label>
              <div className="category-accordion">
                <ChevronRight32 />
              </div>
            </div>

            {item.questions.map((element) => (
              <>{element.question.title}</>
            ))}
          </>
        ))}
      </div>

      <div>
        {respondents.map((respondent) => (
          <Respondent
            respondent={respondent}
            key={respondent.id}
            onRemove={onRemove}
          />
        ))}
      </div>

      <CreateRespondents respondents={respondents} keyPressed={keyPressed} />
    </div>
  );
}

export default RespondentsList;
