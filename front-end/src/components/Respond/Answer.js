import React, { useState } from "react";
import { RadioButton32, RadioButtonChecked32 } from "@carbon/icons-react";
import "../../css/Question.css";

const Answer = ({ i, type, answers, setAnswers }) => {
  const [score, setScore] = useState(0);
  const [yesOrNo, setYesOrNo] = useState(-1);
  switch (type) {
    case "short":
      return (
        <div className="answer-input-wrapper">
          <input type="text" placeholder="원하는 말을 적어주세요" />
        </div>
      );
    case "long":
      return (
        <div className="answer-input-wrapper">
          <input type="text" placeholder="원하는 말을 적어주세요" />
        </div>
      );
    case "number":
      return (
        <div className="answer-input-wrapper">
          <input type="number" placeholder="숫자를 적어주세요" />
        </div>
      );
    case "score":
      return (
        <div className="answer-input-wrapper radio">
          <label>매우 아니다</label>
          <div className="answer-radio-wrapper">
            <div onClick={() => setScore(1)}>
              {score === 1 ? <RadioButtonChecked32 /> : <RadioButton32 />}
            </div>
            <div onClick={() => setScore(2)}>
              {score === 2 ? <RadioButtonChecked32 /> : <RadioButton32 />}
            </div>
            <div onClick={() => setScore(3)}>
              {score === 3 ? <RadioButtonChecked32 /> : <RadioButton32 />}
            </div>
            <div onClick={() => setScore(4)}>
              {score === 4 ? <RadioButtonChecked32 /> : <RadioButton32 />}
            </div>
            <div onClick={() => setScore(5)}>
              {score === 5 ? <RadioButtonChecked32 /> : <RadioButton32 />}
            </div>
          </div>
          <label>매우 그렇다</label>
        </div>
      );
    case "yesOrNo":
      return (
        <div className="answer-input-wrapper">
          <div className="answer-boolean-input" onClick={() => setYesOrNo(1)}>
            예
              {yesOrNo === 1 ? <RadioButtonChecked32 /> : <RadioButton32 />}
          </div>
          <div className="answer-boolean-input" onClick={() => setYesOrNo(0)}>
            아니오
              {yesOrNo === 0 ? <RadioButtonChecked32 /> : <RadioButton32 />}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Answer;
