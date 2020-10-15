import React, { useState } from "react";

const Writer = ({answers, onClick, list}) => {
    const [writer,setWriter] = useState();
    const [answer,setAnswer] = useState();
    // if(list !== null){
    //     setWriter(list.writer)
    //     setAnswer(list.answer)
    // }
    // else{
    //     setWriter(answers.writer)
    //     setAnswer(answers.answer)
    // }

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
