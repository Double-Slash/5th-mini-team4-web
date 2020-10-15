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
    onQuestionRemove,
    setLists, }){

    // const [descript, setDescript]=useState(false);
    // const [contribute, setContribute]=useState(false);

    // const [inputs, setInputs]=useState('')
    // const {name, narrativeChecked, scoreChecked} = inputs;

    // const onChange=(e)=>{
    //     setInputs(e.target.value)
    // }

    // const onDescriptChange = (e) => {
    //     setDescript(!descript)
    // }

    // const onContributeChange = (e) =>{
    //     setContribute(!contribute)
    // }

    // const [questions, setQuestions]=useState([
    //     {
    //         id: 1,
    //         name:"발상: 하정인의 아이디어 창출 능력은 어떠한가?",
    //         narrativeChecked:'false',
    //         scoreChecked:'false'
    //     },
    //     {
    //         id: 2,
    //         name:"자료조사: 하정인의 자료 및 정보 확보 능력에 대해서 어떻게 생각하는가?",
    //         narrativeChecked:'false',
    //         scoreChecked:'false'

    //     },
    //     {
    //         id: 3,
    //         name:"편집: 하정인의 자료 정리 및 편집능력에 대해서 어떻게 생각하는가?",
    //         narrativeChecked:'false',
    //         scoreChecked:'false'
    //     }
    // ])

    // const nextId = useRef(4);

    // const onCreate=()=>{

    //     const question={
    //         id:nextId.current,
    //         name: inputs,
    //         narrativeChecked: descript,
    //         scoreChecked: contribute
    //     }
    //     setQuestions([
    //         ...questions,
    //         question
    //     ])

    //     setInputs({
    //         name:'',
    //         narrativeChecked: 'false',
    //         scoreChecked:'false'
    //     })

    //     nextId.current+=1;
    // }


    // const onRemove=(id)=>{
    //     setLists(questions.filter(question=>question.id!=id));
    // }


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
