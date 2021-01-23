import React, { useState } from "react";

import "../../css/Question.css";
import { Add32 } from "@carbon/icons-react";
import QuestionList from "./QuestionList";

function Question({
  questions,
  index,
  onQuestionAdd,
  onQuestionRemove,
  onQuestionTypeChange,
}) {
  const [question, setQuestion] = useState("");
  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };
  return (
    <div>
      <QuestionList
        index={index}
        onQuestionRemove={onQuestionRemove}
        questions={questions}
        onQuestionTypeChange={onQuestionTypeChange}
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
          onClick={() => {
            onQuestionAdd(index, question);
            setQuestion("");
          }}
        >
          <Add32 />
        </div>
      </div>
    </div>
  );
}

export default Question;
