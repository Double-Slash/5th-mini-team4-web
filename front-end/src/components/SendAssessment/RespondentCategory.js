import { Checkbox32, CheckboxCheckedFilled32 } from "@carbon/icons-react";
import React, { useState } from "react";

function RespondentCategory({
  id,
  necessaryAdd,
  necessaryRemove,
  index,
  necessary,
}) {
  const [isCategoryChecked, setCategoryChecked] = useState(false);

  return (
    <div
      className="respondents-category-check"
      onClick={() => {
        setCategoryChecked(!isCategoryChecked);
        isCategoryChecked
          ? necessaryRemove(id, index)
          : necessaryAdd(id, index);
      }}
    >
      {isCategoryChecked ? <CheckboxCheckedFilled32 /> : <Checkbox32 />}
    </div>
  );
}

export default RespondentCategory;
