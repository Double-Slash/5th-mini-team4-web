import React, { useState } from "react";

import "../../css/Question.css";
import {
  Add32,
  Checkbox32,
  CheckboxCheckedFilled32,
  ChevronDown32,
  ChevronUp32,
  Close32,
  RadioButton32, RadioButtonChecked32,
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
  const [isQuality, setQuality] = useState(false);
  const [isAmount, setAmount] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="question-content">
        {questions?.map((question, i) => (
          <>
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
                  <div className="answer-small-category">
                    <label>단문</label>
                    <RadioButton32 />
                  </div>
                  <div className="answer-input-wrapper">
                    <input type="text" placeholder="원하는 말을 적어주세요" />
                  </div>
                </div>
                <div className="answer-small-category-wrapper">
                  <div className="answer-small-category">
                    <label>장문</label>
                    <RadioButton32 />
                  </div>
                  <div className="answer-input-wrapper">
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
                  <div className="answer-small-category">
                    <label>숫자 입력</label>
                    <RadioButton32 />
                  </div>
                  <div className="answer-input-wrapper">
                    <input type="text" placeholder="숫자를 적어주세요" />
                  </div>
                </div>

                <div className="answer-small-category-wrapper">
                  <div className="answer-small-category">
                    <label>5점 질문</label>
                    <RadioButton32 />
                  </div>
                  <div
                    className="answer-input-container"
                  >
                    <label>매우 아니다</label>
                    <div>
                      <div onClick={() => setScore(1)}>{score==1 ? <RadioButtonChecked32 /> : <RadioButton32 />}</div>
                      <div onClick={() => setScore(2)}>{score==2 ? <RadioButtonChecked32 /> : <RadioButton32 />}</div>
                      <div onClick={() => setScore(3)}>{score==3 ? <RadioButtonChecked32 /> : <RadioButton32 />}</div>
                      <div onClick={() => setScore(4)}>{score==4 ? <RadioButtonChecked32 /> : <RadioButton32 />}</div>
                      <div onClick={() => setScore(5)}>{score==5 ? <RadioButtonChecked32 /> : <RadioButton32 />}</div>
                    </div>
                    <label>매우 그렇다</label>
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

export default Question;
