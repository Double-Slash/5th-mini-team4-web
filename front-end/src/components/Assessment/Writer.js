import React, { useState } from "react";

const Writer = ({answers, onClick}) => {

 return(
 <>
    <button className="writer" onClick={onClick} value={answers.writer}>
      {answers.writer}
    </button>{" "}
    <div className="answer">{answers.answer}</div>
 </>
 )
};

export default Writer;
