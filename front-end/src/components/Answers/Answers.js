import React, { useState } from "react";

import "./Answers.css";
import Writer from '../Writer/Writer';
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";
//카테고리 -> 질문 제목, 사용자 및 댓글 정보..
const Answers = ({ questions }) => {

  const [accordion, setAccordion] = useState(true);
  const [active, setActive] = useState(false);

  const change = (e) => {
    setAccordion(!accordion);
 
    console.log(e.target.nextElementSibling)
    //e.target.nextElementSibling.style="none";
    
  }

  return (
    <>
      <div className="questions">
        {questions.map((questions, index) => {
        

          return(
          
          <div className="question_wrap" id={index}>
            <div className="question" >{questions.question}</div>
            
            
            <div className="accordion" onClick={change}>
                  <img
                    alt="accordion"
                    src={accordion ? chevronup : chevrondown}
                  />
            </div>
            

            
            {questions.answers.map((answers, index) => (
              
              // <Writer answers={answers}></Writer>
              

              // <div className="test">
               <div className={ accordion ? 'open' : 'close'}>
                
                <div className="writer">
                  {answers.writer}
                </div>{" "}

                <div className="answer">{answers.answer}</div>
               
              </div>

            ))}
       



          </div>
        )})}
      </div>
    </>
  );
};

export default Answers;
