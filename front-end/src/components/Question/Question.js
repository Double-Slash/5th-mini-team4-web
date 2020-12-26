import React, { useState } from "react";

import "../../css/Question.css";
import {
  Add32,
  ChevronDown32,
  ChevronUp32,
  Close32,
} from "@carbon/icons-react";

function Question({
  questions,
  lists,
  setLists,
  // descript,
  // contribute,
  // question,
  // onQuestionAdd,
  // onChangeQuestion,
  // onDescriptChange,
  // onContributeChange,
  index,
  // onQuestionRemove,
}) {
  const [question, setQuestion] = useState("");
  const [descript, setDescript] = useState(false);
  const [contribute, setContribute] = useState(false);

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  // 질문 추가
  const onQuestionAdd = (id) => {
    const newList = lists.slice(0);
    newList[0].categories.forEach((category, index) => {
      console.log("test", category);
      if (index === id) {
        category.questions = category.questions.concat({
          question,
          description: descript,
          contribution: contribute,
        });
      }
    });
    setLists(newList);
    setDescript(false);
    setContribute(false);
    setQuestion("");
  };

  // 질문 삭제
  const onQuestionRemove = (id, ind) => {
    const newList = lists.slice(0);
    newList[0].categories.forEach((category, index) => {
      if (index === id) {
        category.questions = category.questions.filter(
          (question, i) => i !== ind
        );
      }
    });
    setLists(newList);
  };

  // 서술형 체크
  const onDescriptChange = (e) => {
    setDescript(!descript);
  };

  // 점수형 체크
  const onContributeChange = (e) => {
    setContribute(!contribute);
  };
  return (
    <div>
      <QuestionList
        index={index}
        onQuestionRemove={onQuestionRemove}
        questions={questions}
      />

      <div className="question-add-input">
        <div className="question-input-wrapper">
          <input
            type="text"
            size="80"
            placeholder="하고 싶은 질문을 입력하세요."
            onChange={onChangeQuestion}
            value={question}
          />
        </div>
        <div
          className="question-add-button"
          onClick={() => onQuestionAdd(index)}
        >
          <Add32 />
        </div>
      </div>
    </div>
  );
}

const QuestionList = ({ onQuestionRemove, questions, index }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <>
      <div className="question-content">
        {questions?.map((question, i) => (
          <div key={i} className="question-container">
            <div className="question-name">
              <div>{question.question}</div>
            </div>
            <div className="question-button-wrapper">
              <div
                className="question-button"
                onClick={() => setAccordion(!accordion)}
              >
                {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
              </div>
              <div className="question-button" onClick={() => onQuestionRemove}>
                <Close32 />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
