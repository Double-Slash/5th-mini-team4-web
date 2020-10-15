import React, { useState } from "react";
import "../../css/Answers.css";
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
import Writer from "./Writer";

//카테고리 -> 질문 제목, 사용자 및 댓글 정보..
const Answers = ({ question, answers, onClick, list }) => {
  const [accordion, setAccordion] = useState(true);
  const [value, setValue] = useState(answers);

  // useEffect(() => {
  //    if(list !== null){
  //     console.log(list);
  //     setValue([list]);
  //   }
  //   else{
  //     console.log(list)
  //   }

  // })

  // const onClick = (e) => {
  //   setList(answers.filter((answers) => answers.writer === e.target.value));
  //   setCheck(!check);
  //   setValue(answers.filter((answers) => answers.writer === e.target.value));
  // };

  return (
    <>
      <div className="questions">
        <div className="question_wrap">
          <div className="accordin_wrap">
            <div className="question">{question}</div>
            <div className="accordion" onClick={() => setAccordion(!accordion)}>
              <img alt="accordion" src={accordion ? chevronup : chevrondown} />
            </div>
          </div>
          {answers.map((answers, index) => (
            <div className={accordion ? "open" : "close"}>
             <Writer answers={answers} ></Writer>
            </div>
          ))}


        </div>
      </div>
    </>
  );
};

export default Answers;
