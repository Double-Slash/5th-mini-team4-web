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

const QuestionList = ({ onQuestionRemove, questions, index }) => {
  const [accordion, setAccordion] = useState(false);
  const [isQuality, setQuality] = useState(false);
  const [isAmount, setAmount] = useState(false);
  const [score, setScore] = useState(0);

  const [qualitySmallCategory, setQualitySmallCategory] = useState("");
  const [quantitySmallCategory, setQuantitySmallCategory] = useState("");

  return (
    <>
      <div className="question-content">
        {questions?.map((question, i) => (
          <>
            <div key={i} className="question-container">
              <div className="question-name">
                <div>{question.question.title}</div>
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
                  onClick={() => onQuestionRemove}
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
                <div className="answer-small-category-wrapper">
                  <div
                    className="answer-small-category"
                    onClick={() => setQualitySmallCategory("short")}
                  >
                    <label>단문</label>
                    {qualitySmallCategory === "short" ? (
                      <RadioButtonChecked32 />
                    ) : (
                      <RadioButton32 />
                    )}
                  </div>
                  <div className="answer-input-container">
                    <input type="text" placeholder="원하는 말을 적어주세요" />
                  </div>
                </div>
                <div className="answer-small-category-wrapper">
                  <div
                    className="answer-small-category"
                    onClick={() => setQualitySmallCategory("long")}
                  >
                    <label>장문</label>
                    {qualitySmallCategory === "long" ? (
                      <RadioButtonChecked32 />
                    ) : (
                      <RadioButton32 />
                    )}
                  </div>
                  <div className="answer-input-container">
                    <input type="text" placeholder="원하는 말을 적어주세요" />
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
                <div className="answer-small-category-wrapper">
                  <div className="answer-small-category" onClick={()=>setQuantitySmallCategory("number")}>
                    <label>숫자 입력</label>
                    {quantitySmallCategory==="number"?<RadioButtonChecked32 />:<RadioButton32/>}
                  </div>
                  <div className="answer-input-container">
                    <input type="text" placeholder="숫자를 적어주세요" />
                  </div>
                </div>

                <div className="answer-small-category-wrapper">
                  <div className="answer-small-category" onClick={()=>setQuantitySmallCategory("score")}>
                    <label>5점 질문</label>
                    {quantitySmallCategory==="score"?<RadioButtonChecked32 />:<RadioButton32/>}
                  </div>
                  <div className="answer-input-container">
                    <label>매우 아니다</label>
                    <div className="answer-radio-wrapper">
                      <div onClick={() => setScore(1)}>
                        {score == 1 ? (
                          <RadioButtonChecked32 />
                        ) : (
                          <RadioButton32 />
                        )}
                      </div>
                      <div onClick={() => setScore(2)}>
                        {score == 2 ? (
                          <RadioButtonChecked32 />
                        ) : (
                          <RadioButton32 />
                        )}
                      </div>
                      <div onClick={() => setScore(3)}>
                        {score == 3 ? (
                          <RadioButtonChecked32 />
                        ) : (
                          <RadioButton32 />
                        )}
                      </div>
                      <div onClick={() => setScore(4)}>
                        {score == 4 ? (
                          <RadioButtonChecked32 />
                        ) : (
                          <RadioButton32 />
                        )}
                      </div>
                      <div onClick={() => setScore(5)}>
                        {score == 5 ? (
                          <RadioButtonChecked32 />
                        ) : (
                          <RadioButton32 />
                        )}
                      </div>
                    </div>
                    <label>매우 그렇다</label>
                  </div>
                </div>
                <div className="answer-small-category-wrapper">
                  <div className="answer-small-category" onClick={()=>setQuantitySmallCategory("yesOrNo")}>
                    <label>예/아니오</label>
                    {quantitySmallCategory==="yesOrNo"?<RadioButtonChecked32 />:<RadioButton32/>}
                  </div>
                  <div className="answer-input-container answer-boolean">
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
          </>
        ))}
      </div>
    </>
  );
};

export default QuestionList;
