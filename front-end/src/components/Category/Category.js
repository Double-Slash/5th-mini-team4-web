import React from "react";
import "../../css/Category.css";
// image
import CategoryInput from "./CategoryInput";
import CategoryList from "./CategoryList";

function Category({
  lists,
  inputs,
  setInputs,
  onCategoryRemove,
  onCategoryAdd,
  onChangeTitle,
  onQuestionAdd,
  onQuestionRemove,
  onQuestionTypeChange,
}) {
  console.log(lists);
  return (
    <>
      {lists.categories?.map((list, index) => {
        return (
          <CategoryList
            key={index}
            list={list}
            index={index}
            onQuestionAdd={onQuestionAdd}
            onQuestionRemove={onQuestionRemove}
            onCategoryRemove={onCategoryRemove}
            onQuestionTypeChange={onQuestionTypeChange}
          />
        );
      })}

      <CategoryInput
        input={inputs.category}
        setInputs={setInputs}
        onChangeTitle={onChangeTitle}
        onCategoryAdd={onCategoryAdd}
      />
    </>
  );
}

export default Category;
