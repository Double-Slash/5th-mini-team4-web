import React, { useState } from "react";
import "../../css/Personal_Answer.css";
import { Bookmark32 } from "@carbon/icons-react";
import { PageNumber32 } from "@carbon/icons-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Personal_Answer = ({ answer }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <>
      <div className="Personal_Answer">
        <div className="Personal_Answer_text">{answer}</div>

        <div className="Personal_Answer_box">
          <div className="Personal_Answer_icon">
            해제
            <Bookmark32 />
          </div>
          <CopyToClipboard text={answer}>
            <div className="Personal_Answer_icon">
              복사
              <PageNumber32 />
            </div>
          </CopyToClipboard>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Personal_Answer;
