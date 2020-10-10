import React from "react";
import Sub from "./Sub";
const Main_title = ({ categories }) => {
  //질문 카테고리
  return (
    <>
      <div>
        {categories.map((categories) => (
          <>
            <div>{categories.category}</div>
            <Sub questions={categories.questions}></Sub>
          </>
        ))}
      </div>
    </>
  );
};

export default Main_title;
