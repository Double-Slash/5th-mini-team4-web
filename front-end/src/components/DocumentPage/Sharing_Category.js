import React, { useState } from "react";
import "../../css/Sharing_Category.css";
import { ChevronUp32 } from "@carbon/icons-react";
import { ChevronDown32 } from "@carbon/icons-react";
import { OverflowMenuVertical32 } from "@carbon/icons-react";
import Sharing_Answer from "./Sharing_Answer";

const Sharing_Category = ({ category, date, answers }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <>
      <div>
        <div className="Sharing_Category">
          <div onClick={() => setAccordion(!accordion)}>
            <div className="Sharing_Category_icon">
              {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
            </div>
            <div className="Sharing_Category_div">{category}</div>
            <div className="Personal_date">{date}</div>
            <div className="Sharing_Over">
              <OverflowMenuVertical32 />
            </div>
          </div>
        </div>
        <div className="Sharing_Category_Ansewer">
          {answers.map((answers) => (
            <div className={accordion ? "personal_open" : "personal_close"}>
              <Sharing_Answer answer={answers}></Sharing_Answer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sharing_Category;
