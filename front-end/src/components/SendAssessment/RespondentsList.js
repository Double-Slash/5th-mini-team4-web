import React, { useState, useRef } from "react";
import "../../css/SendAssessment.css";
import {
  Checkbox32,
  CheckboxCheckedFilled32,
  CheckboxIndeterminateFilled32,
  ChevronRight32,
  SendAltFilled16,
} from "@carbon/icons-react";
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
  const [isCategoryChecked, setCategoryChecked] = useState(false);
  const [isQuestionChecked, setQuestionChecked] = useState(true);

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
        <label>하정인 기획&개발&디자인 능력 설문</label>
      </div>

      <div className="respondents-container">
        <div className="email-container">
          <div className="email-title">
            <label>이메일</label>
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
        </div>
        <div className="category-question-container">
          {list.categories.map((item) => (
            <>
              <div className="respondents-category-container">
                <div className="category-title">
                  <label>{item.category}</label>
                  <div className="category-accordion">
                    <ChevronRight32 />
                  </div>
                </div>
                {respondents.map((item) => (
                  <div
                    className="respondents-category-check"
                    onClick={() => setCategoryChecked(!isCategoryChecked)}
                  >
                    {isCategoryChecked ? (
                      <CheckboxCheckedFilled32 />
                    ) : (
                      <Checkbox32 />
                    )}
                  </div>
                ))}
              </div>
              {item.questions.map((element) => (
                <div className="questions-container">
                  <div className="questions-title">
                    {element.question.title}
                  </div>
                  {respondents.map((item) => (
                    <div
                      className="questions-check"
                      onClick={() =>
                        isCategoryChecked
                          ? setQuestionChecked(!isQuestionChecked)
                          : ""
                      }
                    >
                      {isCategoryChecked ? (
                        isQuestionChecked ? (
                          <CheckboxCheckedFilled32 />
                        ) : (
                          <Checkbox32 />
                        )
                      ) : (
                        <CheckboxIndeterminateFilled32 />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>

      <div className="bottom-wrapper">
        <CreateRespondents respondents={respondents} keyPressed={keyPressed} />

        <div className="send-button-wrapper">
          <button>보내기</button>
          <SendAltFilled16 />
        </div>
      </div>
    </div>
  );
}

export default RespondentsList;
