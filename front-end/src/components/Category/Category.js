import React from "react";
import "../../css/Category.css";
// image
import CategoryInput from "./CategoryInput";
import CategoryList from "./CategoryList";

function Category({
  categories,
  inputs,
  setInputs,
  onCategoryRemove,
  onCategoryAdd,
  onChangeTitle,
  onChangeQuestion,
  onQuestionAdd,
  onQuestionRemove,
  onDescriptChange,
  onContributeChange,
}) {
  return (
    <>
      {categories?.map((list, index) => {
        return (
          <CategoryList
            key={index}
            list={list}
            index={index}
            question={inputs.question}
            onQuestionAdd={onQuestionAdd}
            onQuestionRemove={onQuestionRemove}
            onCategoryRemove={onCategoryRemove}
            onChangeQuestion={onChangeQuestion}
            onDescriptChange={onDescriptChange}
            onContributeChange={onContributeChange}
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
