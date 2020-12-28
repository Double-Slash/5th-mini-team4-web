import React from "react";
import { Add32 } from "@carbon/icons-react";

function CategoryInput({ input, onChangeTitle, onCategoryAdd }) {

  return (
    <>
      <div className="category-wrapper">
        <div className="category-label">
          <input
            value={input}
            onChange={onChangeTitle}
            className="category-input"
            type="text"
            placeholder="하고 싶은 질문의 카테고리를 입력하세요."
          />
        </div>
        <div className="category-right add-only">
          <div className="category-button" onClick={onCategoryAdd}>
            <Add32 />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryInput;
