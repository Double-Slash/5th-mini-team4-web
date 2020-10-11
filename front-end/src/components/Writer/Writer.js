import React from "react";
import "./Writer.css";

const Writer = ({accordion, answers, id}) => {
  const onClick = () => {};
 
  return (
    <>
      <div className="writer" onClick={onClick}>
        {answers.writer}
      </div>{" "}
      <div className="answer">{answers.answer}</div>
  </>

  );
};

export default Writer;