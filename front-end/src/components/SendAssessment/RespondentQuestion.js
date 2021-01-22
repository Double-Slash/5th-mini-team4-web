import {Checkbox32, CheckboxCheckedFilled32, CheckboxIndeterminateFilled32} from "@carbon/icons-react";
import React from "react";

function RespondentQuestion({isCategoryChecked, setQuestionChecked, isQuestionChecked}){
    return(
        <div
            className="questions-check"
            onClick={() =>
                isCategoryChecked
                    ? setQuestionChecked(!isQuestionChecked)
                    : ""
            }
        >
            {isCategoryChecked ? (
                isQuestionChecked ? (
                    <CheckboxCheckedFilled32 />
                ) : (
                    <Checkbox32 />
                )
            ) : (
                <CheckboxIndeterminateFilled32 />
            )}
        </div>
    );
}

export default RespondentQuestion;