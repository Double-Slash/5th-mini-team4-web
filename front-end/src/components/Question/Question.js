import React, {useRef, useState} from 'react';
import '../Assessment/Assessment.css';
import '../../css/Question.css';



function Question(){


    const [descript, setDescript]=useState(false);
    const [contribute, setContribute]=useState(false);

    const [inputs, setInputs]=useState('')
    const {name, narrativeChecked, scoreChecked} = inputs;

    const onChange=(e)=>{
        setInputs(e.target.value)
    }

    const onDescriptChange = (e) => {
        console.log(descript)
        setDescript(!descript)
    }

    const onContributeChange = (e) =>{
        console.log(!contribute)
        setContribute(!contribute)
    }

    const [questions, setQuestions]=useState([
        {
            id: 1,
            name:"발상: 하정인의 아이디어 창출 능력은 어떠한가?",
            narrativeChecked:'false',
            scoreChecked:'false'
        },
        {
            id: 2,
            name:"자료조사: 하정인의 자료 및 정보 확보 능력에 대해서 어떻게 생각하는가?",
            narrativeChecked:'false',
            scoreChecked:'false'

        },
        {
            id: 3,
            name:"편집: 하정인의 자료 정리 및 편집능력에 대해서 어떻게 생각하는가?",
            narrativeChecked:'false',
            scoreChecked:'false'
        }
    ])

    const nextId = useRef(4);

    const onCreate=()=>{

        const question={
            id:nextId.current,
            name: inputs,
            narrativeChecked: descript,
            scoreChecked: contribute
        }
        setQuestions([
            ...questions,
            question
        ])

        setInputs({
            name:'',
            narrativeChecked: 'false',
            scoreChecked:'false'
        })

        nextId.current+=1;
    }


    const onRemove=(id)=>{
        setQuestions(questions.filter(question=>question.id!=id));
    }


    return(
        <div>
            <QuestionList onRemove={onRemove} questions={questions}></QuestionList>

            <div className="Question_questionInput">
                <div className="Question_questionName">
                    <input type="text"
                           name="name"
                           size="80"
                           placeholder="하고 싶은 질문을 입력하세요."
                           onChange={onChange}
                           value={name}/>
                </div>
                <div className="Question_questionOption">
                    <label htmlFor="o1">서술형</label>
                    <input type="checkbox" id="o1" value={descript} onChange={onDescriptChange}/>
                    <label htmlFor="o2">점수형</label>
                    <input type="checkbox" id="o2" value={contribute} onChange={onContributeChange}/>
                    <span>
                    <img src={require("../../images/add.svg")} onClick={onCreate}/>
                </span>
                </div>
            </div>
        </div>
    )
}

const QuestionList = ({ onRemove, questions}) => {

    return(
        <>
            <div className="Question_questionList">
                {questions.map(question=>(
                    console.log(question.narrativeChecked),
                        <div className="Question_question">
                            <div className="Question_questionName"> <label>{question.name}</label> </div>
                            <div className="Question_questionOption">
                                <label>서술형</label>
                                <input type="checkbox" checked={question.narrativeChecked} />
                                <label>점수형</label>
                                <input type="checkbox" checked={question.scoreChecked} />
                                <span>
                            <img src={require("../../images/close.svg")} onClick={() => onRemove(question.id)}/>
                            </span>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}


export default Question;
