import React, { useState } from "react";
import "../../css/Personal_Category.css";
import { ChevronUp32 } from "@carbon/icons-react";
import { ChevronDown32 } from "@carbon/icons-react";
import Personal_Question from "./Personal_Question";
const Personal_Categories = ({ category, questions }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <>
      <div>
        <div>
          <div onClick={() => setAccordion(!accordion)}>
            <div className="Personal_Category_icon Personal_Category_div">
              {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
            </div>
            <div className="Personal_Category_div">{category}</div>
          </div>
        </div>

        {questions.map((questions) => (
          <div className={accordion ? "personal_open" : "personal_close"}>
            <Personal_Question
              question={questions.question}
              answer={questions.answers}
            ></Personal_Question>
          </div>
        ))}
      </div>
    </>
  );
};

export default Personal_Categories;
