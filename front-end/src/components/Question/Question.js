import React from "react";

import "../../css/Question.css";
import { Add32 } from "@carbon/icons-react";
import QuestionList from "./QuestionList";

function Question({
  questions,
  index,
  onQuestionAdd,
  onQuestionRemove,
  onChangeQuestion,
  question,
}) {
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

export default Question;
