import React, { useState } from "react";
import Answers from "./Answers";
import "../../css/Categories.css";
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
const Categories = ({ categories, questions, onClick }) => {
  //질문 카테고리
  const [accordion, setAccordion] = useState(true);

  return (
    <>
      {/* 카테고리 제목 출력 */}
      <div className="categories_s">
        <div className="category_s_wrap">
          <div className="category_s">{categories}</div>

          <div className="accordion1" onClick={() => setAccordion(!accordion)}>
            <img alt="accordion" src={accordion ? chevronup : chevrondown} />
          </div>
        </div>

        {/* questions 정보 하위로 전달 */}
        {questions.map((questions) => (
          <div className={accordion ? "open_s" : "close_s"}>
            <Answers
              onClick={onClick}
              question={questions.question}
              answers={questions.answers}
            ></Answers>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
