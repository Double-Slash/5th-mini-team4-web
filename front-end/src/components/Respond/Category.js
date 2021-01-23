import React from "react";
import Questions from "./Questions";
import "../../css/Category.css";

const Category = ({ category, answers, setAnswers }) => {
  return (
    <>
      <div className="category-container">
        <div className="category-wrapper">
          <div className="category-label">{category.category}</div>
        </div>
      </div>
      <Questions
        questions={category.questions}
        answers={answers}
        setAnswers={setAnswers}
      />
    </>
  );
};

export default Category;
