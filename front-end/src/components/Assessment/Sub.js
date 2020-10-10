import React from "react";

const Sub = ({ questions }) => {
  //카테고리 -> 질문 제목, 사용자 및 댓글 정보..

  const onClick = () => {
      
  }
  return (
    <>
      <div>
        {questions.map((questions) => (
          <>
            <div>{questions.question}</div>

            {questions.answers.map((answers) => (
              <div>
                <div onClick={onClick}>{answers.writer}</div> : {answers.answer}
              </div>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default Sub;
