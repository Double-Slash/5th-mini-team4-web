import React, { useState } from "react";
import { Close32, Email32 } from "@carbon/icons-react";
import "../../css/SendAssessment.css";

function CreateRespondents({ email, keyPressed }) {
  const [isChange, setChange] = useState(false);

  const inputChanged = (e) => {
    if (e.target.value.length > 0) {
      setChange(true);
    } else {
      setChange(false);
    }
    console.log(isChange);
    console.log(e.target.value.length);
  };

  return (
    <>
      <div className="input-email-wrapper">
        <Email32 />
        <input
          type="text"
          placeholder="응답자의 이메일을 입력하세요."
          name="email"
          value={email}
          onChange={inputChanged}
          onKeyPress={keyPressed}
        ></input>
        <div>
          <Close32 />
        </div>
      </div>
    </>
  );
}

export default CreateRespondents;
