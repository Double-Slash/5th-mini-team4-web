import React, { useState } from "react";
import {
  Checkbox32,
  CheckboxCheckedFilled32,
  ChevronDown32,
  ChevronUp32,
  Close32,
  RadioButton32,
  RadioButtonChecked32,
} from "@carbon/icons-react";
import "../../css/Question.css";

const QuestionList = ({
  onQuestionRemove,
  questions,
  index,
  onQuestionTypeChange,
}) => {
  const [accordion, setAccordion] = useState(false);
  const [isQuality, setQuality] = useState(false);
  const [isAmount, setAmount] = useState(false);

  const [smallCategory, setSmallCategory] = useState("");

  const onQuestionType = (i, type) => {
    onQuestionTypeChange(i, type);
    setSmallCategory(type);
  };

  return (
    <>
      <div className="question-content">
        {questions?.map((question, i) => (
          <>
            <div key={i} className="question-container">
              <div className="question-name">
                <div>{question.question.question}</div>
              </div>
              <div className="question-button-wrapper">
                <div
                  className="question-button"
                  onClick={() => setAccordion(!accordion)}
                >
                  {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
                </div>
                <div
                  className="question-button"
                  onClick={() => onQuestionRemove(index, i)}
                >
                  <Close32 />
                </div>
              </div>
            </div>

            <div className="answer-large-category-container">
              <div className="answer-wrapper">
                <div
                  className="answer-large-category"
                  onClick={() => setQuality(!isQuality)}
                >
                  <label>질적</label>
                  {isQuality ? <CheckboxCheckedFilled32 /> : <Checkbox32 />}
                </div>

                <div className={isQuality ? "" : "unchecked"}>
                  <div className="answer-small-category-wrapper">
                    <div
                      className={`answer-small-category ${
                        isQuality ? "" : " unchecked"
                      }`}
                      onClick={() => onQuestionType(i, "short")}
                    >
                      <label>단문</label>
                      {smallCategory === "short" ? (
                        <RadioButtonChecked32 />
                      ) : (
                        <RadioButton32 />
                      )}
                    </div>
                    <div
                      className={`answer-input-container ${
                        isQuality ? "" : "unchecked"
                      }`}
                    >
                      <input type="text" placeholder="원하는 말을 적어주세요" />
                    </div>
                  </div>
                  <div className="answer-small-category-wrapper">
                    <div
                      className={`answer-small-category ${
                        isQuality ? "" : "unchecked"
                      }`}
                      onClick={() => onQuestionType(i, "long")}
                    >
                      <label>장문</label>
                      {smallCategory === "long" ? (
                        <RadioButtonChecked32 />
                      ) : (
                        <RadioButton32 />
                      )}
                    </div>
                    <div
                      className={`answer-input-container ${
                        isQuality ? "" : "unchecked"
                      }`}
                    >
                      <input type="text" placeholder="원하는 말을 적어주세요" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="answer-wrapper">
                <div
                  className="answer-large-category"
                  onClick={() => setAmount(!isAmount)}
                >
                  <label>양적</label>
                  {isAmount ? <CheckboxCheckedFilled32 /> : <Checkbox32 />}
                </div>

                <div className={`${isAmount ? "" : "unchecked"}`}>
                  <div className="answer-small-category-wrapper">
                    <div
                      className={`answer-small-category ${
                        isAmount ? "" : "unchecked"
                      }`}
                      onClick={() => onQuestionType(i, "number")}
                    >
                      <label>숫자 입력</label>
                      {smallCategory === "number" ? (
                        <RadioButtonChecked32 />
                      ) : (
                        <RadioButton32 />
                      )}
                    </div>
                    <div
                      className={`answer-input-container ${
                        isAmount ? "" : "unchecked"
                      }`}
                    >
                      <input type="text" placeholder="숫자를 적어주세요" />
                    </div>
                  </div>

                  <div className="answer-small-category-wrapper">
                    <div
                      className={`answer-small-category ${
                        isAmount ? "" : "unchecked"
                      }`}
                      onClick={() => onQuestionType(i, "score")}
                    >
                      <label>5점 질문</label>
                      {smallCategory == "score" ? (
                        <RadioButtonChecked32 />
                      ) : (
                        <RadioButton32 />
                      )}
                    </div>
                    <div
                      className={`answer-input-container ${
                        isAmount ? "" : "unchecked"
                      }`}
                    >
                      <label>매우 아니다</label>
                      <div className="answer-radio-wrapper">
                        <div>
                          <RadioButton32 />
                        </div>
                        <div>
                          <RadioButton32 />
                        </div>
                        <div>
                          <RadioButton32 />
                        </div>
                        <div>
                          <RadioButton32 />
                        </div>
                        <div>
                          <RadioButton32 />
                        </div>
                      </div>
                      <label>매우 그렇다</label>
                    </div>
                  </div>
                  <div className="answer-small-category-wrapper">
                    <div
                      className={`answer-small-category ${
                        isAmount ? "" : "unchecked"
                      }`}
                      onClick={() => onQuestionType(i, "yesOrNo")}
                    >
                      <label>예/아니오</label>
                      {smallCategory === "yesOrNo" ? (
                        <RadioButtonChecked32 />
                      ) : (
                        <RadioButton32 />
                      )}
                    </div>
                    <div
                      className={`answer-input-container answer-boolean ${
                        isAmount ? "" : "unchecked"
                      }`}
                    >
                      <div className="answer-boolean-input">
                        예
                        <RadioButton32 />
                      </div>
                      <div className="answer-boolean-input">
                        아니오
                        <RadioButton32 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default QuestionList;
