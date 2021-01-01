import React, { useState } from "react";
import "../../css/Personal_Question.css";
import { ChevronUp32 } from "@carbon/icons-react";
import { ChevronDown32 } from "@carbon/icons-react";
import Personal_Answer from "./Personal_Answer";
const Personal_Question = ({ question, answer }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <>
      <div className="Personal_Question">
        <div>
          <div onClick={() => setAccordion(!accordion)}>
            <div className="Personal_Question_icon Personal_Question_div">
              {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
            </div>
            <div className="Personal_Question_div">{question}</div>
          </div>
        </div>

        {answer.map((answers) => (
          <div className={accordion ? "personal_open" : "personal_close"}>
            <Personal_Answer answer={answers.answer}></Personal_Answer>
          </div>
        ))}
      </div>
    </>
  );
};

export default Personal_Question;
