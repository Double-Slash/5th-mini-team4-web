import React from "react";
import Answers from "../Answers/Answers";
const Categories = ({ categories }) => {
  //질문 카테고리
  return (
    <>
      <div className="Categories">
        {categories.map((categories) => (
          <>
            <div className="Category">{categories.category}</div>
            <Answers questions={categories.questions}></Answers>
          </>
        ))}
      </div>
    </>
  );
};

export default Categories;
