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
  onChangeQuestion,
  onQuestionAdd,
  onQuestionRemove,
  onDescriptChange,
  onContributeChange,
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
            question={inputs.question}
            onQuestionAdd={onQuestionAdd}
            onQuestionRemove={onQuestionRemove}
            onCategoryRemove={onCategoryRemove}
            onChangeQuestion={onChangeQuestion}
            onDescriptChange={onDescriptChange}
            onContributeChange={onContributeChange}
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
