import React, { useState } from "react";
import { ChevronDown32, ChevronUp32, Close32 } from "@carbon/icons-react";
import Question from "../Question/Question";

function CategoryList({
  list,
  index,
  onCategoryRemove,
  onQuestionAdd,
  onQuestionRemove,
  onQuestionTypeChange,
}) {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="category-container">
      <div className="category-wrapper">
        <div className="category-label">{list.category}</div>
        <div className="category-right">
          <div
            className="category-button"
            onClick={() => setAccordion(!accordion)}
          >
            {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
          </div>
          <div
            className="category-button"
            onClick={() => onCategoryRemove(index)}
          >
            <Close32 />
          </div>
        </div>
      </div>

      <div className={accordion ? "category-open" : "category-close"}>
        <Question
          questions={list.questions}
          onQuestionAdd={onQuestionAdd}
          index={index}
          onQuestionRemove={onQuestionRemove}
          onQuestionTypeChange={onQuestionTypeChange}
        />
      </div>
    </div>
  );
}

export default CategoryList;
