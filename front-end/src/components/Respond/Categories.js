import React from "react";
import Category from "./Category";
import "../../css/Categories.css";

const Categories = ({ list, answers, setAnswers }) => {
  return (
    <>
      {list.categories?.map((category) => {
        return (
          <Category
            category={category}
            answers={answers}
            setAnswers={setAnswers}
          />
        );
      })}
    </>
  );
};

export default Categories;
