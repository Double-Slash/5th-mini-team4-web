import React, { useState } from 'react';

import AnalysisHeader from './AnalysisHeader';
import AnalysisBar from './AnalysisBar'

import { Download32, Search32, Settings32, RadioButton32, RadioButtonChecked32 } from "@carbon/icons-react";

function AnalysisList(props) {
  const lists = [
    {
      category: "개발",
      questions: [
        {
          question: "개발이 괜찮나?",
          questionType: "LONG",
          answers: [
            {
              writer: "test",
              answer: "매우 안정적이였다!",
              number: 70
            },
            {
              writer: "test01",
              answer: "매우 안정적이였다!",
              number: 60
            },
            {
              writer: "test",
              answer: "매우 안정적이였다!",
              number: 80
            },
            {
              writer: "test",
              answer: "매우 안정적이였다!",
              number: 90
            },
            {
              writer: "test",
              answer: "매우 안정적이였다!",
              number: 50
            },
          ]
        },
        {
          question: "코드가 괜찮은가?",
          questionType: "LONG",
          answers: [
            {
              writer: "test",
              answer: "매우 괜찮았다 ",
              number: 30
            }
          ]
        },
      ]
    },
    {
      category: "기획",
      questions: [
        {
          question: "기획이 괜찮나?",
          questionType: "LONG",
          answers: [
            {
              writer: "작성자",
              answer: "서술형 응답 내역",
              number: 50
            }
          ]
        }
      ]
    },
    {
      category: "디자인",
      questions: [
        {
          question: "디자인이 괜찮나?",
          questionType: "LONG",
          answers: [
            {
              writer: "작성자",
              answer: "서술형 응답 내역",
              number: 50
            }
          ]
        }
      ]
    },
  ]
  return ( 
    <div>
      <AnalysisHeader />
      
      <div style={{ marginTop: 72, padding: '0 64px' }}>
        <AnalysisBar 
          leftMenu={props.leftMenu}
          rightMenu={props.rightMenu}
          leftSelect={props.leftSelect}
          rightSelect={props.rightSelect}
          onMenuClick={props.onMenuClick}
        />

        {/* 중간 설명 부분  */}
        <div style={{ backgroundColor: '#f2f4f8' }}>
          <div style={{ fontSize: 32, fontWeight: 'bold', padding: '8px 16px 0 16px'}}>
            기술통계 - {props.rightSelect}
          </div>
          
          <div style={{ color: '#878d96', fontSize: 24, padding: '0 16px' }}>
            숫자 입력응답을 분석한 표
          </div>
          
          <div style={{ 
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            marginTop: 20
            }}>
            <div style={{ 
              display:'flex',
              justifyContent:'space-between',
              backgroundColor: '#08bdba',
              alignItems: 'center',
              padding: '6px 16px' }}>
              <div style={{ color: 'white', fontSize: 24 }}>다운로드</div>
              <Download32 style={{ color: 'white', marginLeft: 90 }}/>

            </div>
            <div>
              <Search32 />
              <Settings32 style={{marginLeft: 32, marginRight: 16 }}/>
            </div>
          </div>
        </div>

        {/* 본 내용 부분 */}
        <AnalysisContents 
          leftSelect={props.leftSelect} 
          rightSelect={props.rightSelect} 
          lists={lists}
        />

      </div>
    </div>
  );
}

function AnalysisContents(props) {
  const renderContentQMenu = (leftSelect,rightSelect) => {
    if(leftSelect === '질문' && rightSelect === '숫자 입력'){
      return (
        <div style={{ display: 'flex', height: 64, alignItems: 'center', flexDirection: 'row', backgroundColor: '#343a3f', width: '30%'}}>
          <div style={{ color: 'white', padding: '16px 30px 16px 16px' }}>평균</div>
          <div style={{ color: 'white', padding: '16px 30px 16px 16px' }}>표준편차</div>
          <div style={{ color: 'white', padding: '16px 30px 16px 16px' }}>중앙값</div>
          <div style={{ color: 'white', padding: '16px 30px 16px 16px' }}>최솟값</div>
          <div style={{ color: 'white', padding: '16px 30px 16px 16px' }}>최댓값</div>
        </div>
      )
    }
    if(leftSelect === '질문' &&rightSelect === '5점 질문' || rightSelect === '예/아니오'){
      return (
        <div style={{ display: 'flex', height: 64, alignItems: 'center', flexDirection: 'row', backgroundColor: '#343a3f', width: '30%'}}>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>평균</div>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>표준편차</div>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>최빈값</div>
        </div>
      )
    }
    if(leftSelect === '질문' && rightSelect === '다중 다택'){
      return (
        <div style={{ display: 'flex', height: 64, alignItems: 'center', flexDirection: 'row', backgroundColor: '#343a3f', width: '30%'}}>
          <div style={{ color: 'white', padding: '16px 230px 16px 16px' }}>최빈값</div>
          <div style={{ color: 'white', padding: '16px 50px 16px 16px' }}>평균 선택 비율</div>
        </div>
      )
    }
  }
  const renderContentAMenu = (leftSelect, rightSelect) => {

  }
  const renderQuestion = () =>{
    return(
      <div style={{ display: 'flex'}}>
        <div style={{ display: 'flex', height: 64, alignItems: 'center', backgroundColor: '#697077', width: '70%'}}>
          <div style={{ padding: '16px 147px 16px 16px', color: 'white'}}>
            대분류
          </div>
          <div style={{ color: 'white', marginLeft: 20 }}>질문항목</div>
        </div>
        { 
          renderContentQMenu(props.leftSelect,props.rightSelect) 
        }
      </div>
    )
  }
  const renderAnswer = () => {
    return (
      <div style={{ display: 'flex'}}>
        <div style={{ padding: '12px 145px 12px 16px', backgroundColor: '#f2f4f8', width: '16.5%', borderBottom: '2px solid #dde1e6'}}>카테고리</div>
        <div style={{ display: 'flex', alignItems: 'center', width: '70%'}}>
          <div style={{ width: '25%',padding: '16px 147px 16px 16px', borderBottom: '2px solid #dde1e6',borderRight: '2px solid #dde1e6' }}>질문</div>
          <div style={{ width: '80%', padding: 16, borderBottom: '2px solid #dde1e6',borderRight: '2px solid #dde1e6' }}>응답</div>
        </div>
        <div style={{ width: '27%',padding: 16, borderRight: '2px solid #dde1e6', borderBottom: '2px solid #dde1e6'  }}>점수</div>
      </div>
    )
  }
  if(props.leftSelect === '질문' ){
    return(
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          { renderQuestion() }
        </div>
        <AnalysisQuestionDetail 
          rightSelect={props.rightSelect} 
          leftSelect={props.leftSelect}
          lists={props.lists}
        />
      </>
    )
  } 
  else if(props.leftSelect === '응답'){
    return(
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          { renderAnswer() }
        </div>
        <AnalysisAnswerDetail 
         rightSelect={props.rightSelect} 
         leftSelect={props.leftSelect}
         lists={props.lists}
        />
      </>
    )
  }
  return(
    null
  )
}

function AnalysisQuestionDetail(props) { 
  const [average, setAverage] = useState([])
  let testNum = 0
  const testFun = (number,ind,inde,idx) => {
    return onCalculate(number,ind,inde,idx)
  }
  const onCalculate = (number,ind,inde,idx) => {
    props.lists.forEach((list,index)=>{
      if(index === ind){
        list.questions.forEach((question,i)=>{
          console.log(question)
          question.answers.forEach((answer,id)=>{
            if(index === ind && i === inde){
              testNum += answer.number
              console.log(testNum,index)
            }
          })
        })
      }
    })
  }
  const renderAnalysis = (rightSelect, number) => {
    if(rightSelect === '숫자 입력'){
      return (
        <div style={{ width: '53%'}}>
          <div style={{ display: 'flex' ,overflow: 'hidden'}}>
            <div style={{ width: '20%', padding: 16, borderBottom: '2px solid #4d5358' }}>74.75</div>
            <div style={{ width: '20%', padding: 16, borderBottom: '2px solid #4d5358' }}>15.96</div>
            <div style={{ width: '20%', padding: 16, borderBottom: '2px solid #4d5358' }}>80</div>
            <div style={{ width: '20%', padding: 16, borderBottom: '2px solid #4d5358' }}>46</div>
            <div style={{ width: '20%', padding: 16, borderBottom: '2px solid #4d5358' }}>97</div>
          </div>
        </div>
      )
    }
    if(rightSelect === '5점 질문' || rightSelect === '예/아니오'){
      return (
        <div style={{ width: '53%'}}>
          <div style={{ display: 'flex' ,overflow: 'hidden'}}>
            <div style={{ width: '33%', padding: 16, borderBottom: '2px solid #4d5358' }}>2.33</div>
            <div style={{ width: '33%', padding: 16, borderBottom: '2px solid #4d5358' }}>0.91</div>
            <div style={{ width: '33%', padding: 16, borderBottom: '2px solid #4d5358' }}>2</div>
          </div>
        </div>
      )
    }
    if(rightSelect === '다중 다택'){
      return (
        <div style={{ width: '53%'}}>
          <div style={{ display: 'flex' ,overflow: 'hidden'}}>
            <div style={{ padding: 16, borderBottom: '2px solid #4d5358', width: '70%' }}>워크숍 운영 능력</div>
            <div style={{ padding: 16, borderBottom: '2px solid #4d5358', width:'30%'}}>46.62%</div>
          </div>
        </div>
      )
    }
  }

  return(
    console.log('test',average),
    <div style={{ display: 'flex', paddingBottom: 50, flexDirection: 'column' }}>
      {
        props.lists.map((list, ind)=>{
          return(
            <div style={{ display: 'flex', width: '100%'}}>
              <div style={{ padding: '12px 147px 12px 16px', backgroundColor: '#f2f4f8', width: '16%', borderBottom: '2px solid #dde1e6'}}>{list.category}</div>
              <div style={{ width: '100%'}}>
                {
                  list.questions.map((question,i)=>{
                    return(
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '97%'}}>
                          <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>{question.question}</div>
                          {
                            question.answers.map((answer,index)=>{
                              if(props.rightSelect === '숫자 입력'){
                                return(
                                  console.log('answer', index,i,ind),
                                  <div>
                                    {/* { onCalculate(answer.number,ind,index,i) } */}
                                    { testFun(answer.number,ind,i,index ) }
                                  </div>
                                )
                              }
                            })
                          }
                        </div>
                        {
                          renderAnalysis(props.rightSelect)
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function AnalysisAnswerDetail(props){
  const renderAnswerResult = (number) => {
    if(props.rightSelect === '숫자 입력'){
      return (
        <div style={{ padding: 16, borderBottom: '2px solid #4d5358', width:'100%'}}>{number}</div>
      )
    }
    if(props.rightSelect === '5점 질문'){
      return (
        <div style={{ display:'flex', alignItems: 'center', backgroundColor: '#f2f4f8', padding: 12, borderBottom: '2px solid #4d5358', width:'100%'}}>
          <div style={{ fontSize: 12, marginRight: 8 }}>매우아니다</div>
            <div style={{ display: 'flex'}}>
              {
                number === 1 ? <RadioButtonChecked32 /> : <RadioButton32 />
              }
              {
                number === 2 ? <RadioButtonChecked32 /> : <RadioButton32 />
              }
              {
                number === 3 ? <RadioButtonChecked32 /> : <RadioButton32 />
              }
              {
                number === 4 ? <RadioButtonChecked32 /> : <RadioButton32 />
              }
              {
                number === 5 ? <RadioButtonChecked32 /> : <RadioButton32 />
              }
            </div>
          <div style={{ fontSize: 12, marginLeft: 8 }}>매우그렇다</div>
        </div>
      )
    }
    if(props.rightSelect === '예/아니오'){
      return(
        <div style={{ display:'flex', alignItems: 'center', backgroundColor: '#f2f4f8', padding: 12, borderBottom: '2px solid #4d5358', width:'100%'}}>
          
          <div style={{ fontSize: 12, marginRight: 100 }}>예</div>
          
          {
            number === 1 ? <RadioButtonChecked32 /> : <RadioButton32 />
          }
          
          <div style={{ fontSize: 12, marginRight: 100 }}>아니오</div>
          {
            number === 0 ? <RadioButtonChecked32 /> : <RadioButton32 />
          }
        </div>
      )
    }
    if(props.rightSelect === '다중 다택'){
      return (
        <div style={{ width: '53%'}}>
          <div style={{ display: 'flex' ,overflow: 'hidden'}}>
            <div style={{ padding: 16, borderBottom: '2px solid #4d5358', width: '70%' }}>워크숍 운영 능력</div>
            <div style={{ padding: 16, borderBottom: '2px solid #4d5358', width:'30%'}}>46.62%</div>
          </div>
        </div>
      )
    }
  }
  return(
    <div style={{ display: 'flex', paddingBottom: 50, flexDirection: 'column' }}>
      {
        props.lists.map((list,i)=> {
          return(
            console.log(list),
            <div style={{ display: 'flex', width: '100%'}}>
              
              <div style={{ padding: '12px 147px 12px 16px', backgroundColor: '#f2f4f8', width: '16.5%', borderBottom: '2px solid #dde1e6'}}>{list.category}</div>
              
              <div style={{ width: '100%'}}>
                {
                  list.questions.map((question, ind)=>{
                    return(
                      console.log('test',question),
                      <div style={{ display: 'flex' }}>
                        
                        <div style={{ display: 'flex', width: '100%'}}>
                          <div style={{ width: '32%', padding: 16, borderBottom: '2px solid #dde1e6' }}>{question.question}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                            {
                              question.answers.map((answer,index)=>{
                                return(
                                  console.log(answer),
                                  <div style={{ width: '100%', padding: 16, borderBottom: '2px solid #dde1e6'}}>
                                    {answer.answer}
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div style={{ width: '39%'}}>

                          {
                            question.answers.map((answer, index)=>{
                              return(
                                <div style={{ width: '100%'}}>
                                  <div style={{ display: 'flex' ,overflow: 'hidden'}}>
                                    { renderAnswerResult(answer.number) }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      
                      </div>
                    )
                  })
                }
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default AnalysisList;
