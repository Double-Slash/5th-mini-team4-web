import React, { useState } from "react";
import "../../css/Sharing_Category.css";
import { ChevronUp32 } from "@carbon/icons-react";
import { ChevronDown32 } from "@carbon/icons-react";
import Sharing_Answer from "./Sharing_Answer";

const Sharing_Category = ({ category, answers }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <>
      <div>
        <div>
          <div onClick={() => setAccordion(!accordion)}>
            <div className="Sharing_Category_icon Sharing_Category_div">
              {accordion ? <ChevronUp32 /> : <ChevronDown32 />}
            </div>
            <div className="Sharing_Category_div">{category}</div>
          </div>
        </div>

        {answers.map((answers) => (
          <div className={accordion ? "personal_open" : "personal_close"}>
            <Sharing_Answer answer={answers}></Sharing_Answer>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sharing_Category;
