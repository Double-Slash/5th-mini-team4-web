import React, { useState } from 'react';

import '../../css/Question.css';

function Question({ 
    questions,
    descript,
    contribute, 
    question,
    onQuestionAdd, 
    onChangeQuestion, 
    onDescriptChange, 
    onContributeChange, 
    index,
    onQuestionRemove, }){

    return(
        <div>
            {/* <QuestionList onRemove={onRemove} questions={questions}></QuestionList> */}
            <QuestionList index={index} onQuestionRemove={onQuestionRemove} questions={questions}></QuestionList>

            <div className="Question_questionInput">
                <div className="Question_questionName">
                    <input type="text"
                           size="80"
                           placeholder="하고 싶은 질문을 입력하세요."
                           onChange={onChangeQuestion}
                           value={question}/>
                </div>
                <div className="Question_questionOption">
                    <label htmlFor="o1">서술형</label>
                    <input type="checkbox" id="o1" checked={descript} onChange={onDescriptChange}/>
                    <label htmlFor="o2">점수형</label>
                    <input type="checkbox" id="o2" checked={contribute} onChange={onContributeChange}/>
                    <span>
                    <img src={require("../../images/add.svg")} onClick={() => onQuestionAdd(index)}/>
                </span>
                </div>
            </div>
        </div>
    )
}

const QuestionList = ({ onQuestionRemove, questions, index}) => {

    return(
        <>
            <div className="Question_questionList">
                {questions?.map((question,i)=>(
                        <div key={i} className="Question_question">
                            <div className="Question_questionName"> <label>{question.question}</label> </div>
                            <div className="Question_questionOption">
                                <label>서술형</label>
                                <input type="checkbox" readOnly defaultChecked={question.description} />
                                <label>점수형</label>
                                <input type="checkbox" readOnly defaultChecked={question.contribution} />
                                <span>
                            <img src={require("../../images/close.svg")} onClick={() => onQuestionRemove(index, i)}/>
                            </span>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}


export default Question;
