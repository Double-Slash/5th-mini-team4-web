import React, { useState } from 'react';

import AnalysisHeader from './AnalysisHeader';
import AnalysisBar from './AnalysisBar'

import { Download32, Search32, Settings32 } from "@carbon/icons-react";
import Analysis from '../../pages/Analysis/Analysis';

function AnalysisList(props) {
  const lists = [
    {
      category: "개발",
      questions: [
        {
          question: {
            title: "개발이 괜찮나?",
            answers: [
              {
                type: "short",
              },
              {
                type: "number",
              },
            ],
          },
        },
      ],
    },
    {
      category: "기획",
      questions: [
        {
          question: {
            title: "개발이 괜찮나?",
            answers: [
              {
                type: "short",
              },
              {
                type: "number",
              },
            ],
          },
        },
      ],
    },
    {
      category: "디자인",
      questions: [
        {
          question: {
            title: "개발이 괜찮나?",
            answers: [
              {
                type: "short",
              },
              {
                type: "number",
              },
            ],
          },
        },
      ],
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
        <AnalysisContents leftSelect={props.leftSelect} rightSelect={props.rightSelect} lists={lists}/>

      </div>
    </div>
  );
}

function AnalysisContents(props) {
  const renderContentMenu = (rightSelect) => {
    if(rightSelect === '숫자 입력'){
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
    if(rightSelect === '5점 질문' || rightSelect === '예/아니오'){
      return (
        <div style={{ display: 'flex', height: 64, alignItems: 'center', flexDirection: 'row', backgroundColor: '#343a3f', width: '30%'}}>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>평균</div>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>표준편차</div>
          <div style={{ color: 'white', padding: '16px 90px 16px 16px' }}>최빈값</div>
        </div>
      )
    }
    if(rightSelect === '다중 다택'){
      return (
        <div style={{ display: 'flex', height: 64, alignItems: 'center', flexDirection: 'row', backgroundColor: '#343a3f', width: '30%'}}>
          <div style={{ color: 'white', padding: '16px 230px 16px 16px' }}>최빈값</div>
          <div style={{ color: 'white', padding: '16px 50px 16px 16px' }}>평균 선택 비율</div>
        </div>
      )
    }
  }

  return(
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex'}}>
        <div style={{ display: 'flex', height: 64, alignItems: 'center', backgroundColor: '#697077', width: '70%'}}>
          <div style={{ padding: '16px 147px 16px 16px', color: 'white'}}>
            대분류
          </div>
          <div style={{ color: 'white', marginLeft: 20 }}>질문항목</div>
        </div>
        { renderContentMenu(props.rightSelect) }
      </div>
      
      <AnalysisDetail rightSelect={props.rightSelect} lists={props.lists}/>

    </div>
  )
}

function AnalysisDetail(props) {
  const renderAnalysis = (rightSelect) => {
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
    console.log(props),
    <div style={{ display: 'flex', paddingBottom: 50, flexDirection: 'column' }}>
      {
        props.lists.map((list, index)=>{
          return(
            console.log(list),
            <div style={{ display: 'flex', width: '100%'}}>
              <div style={{ padding: '12px 147px 12px 16px', backgroundColor: '#f2f4f8', width: '16%', borderBottom: '2px solid #dde1e6'}}>{list.category}</div>
              <div style={{ width: '100%'}}>
                {
                  list.questions.map((question,index)=>{
                    return(
                      console.log(question),
                      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>{question.question.title}</div>
                    )
                  })
                }
              </div>
              { renderAnalysis(props.rightSelect)}
            </div>
          )
        })
      }
    </div>
  )
}

export default AnalysisList;

{/* <div style={{ display: 'flex', paddingBottom: 50, flexDirection: 'column' }}>
  <div style={{ display: 'flex', width: '100%'}}>
    <div style={{ padding: '12px 147px 12px 16px', backgroundColor: '#f2f4f8', width: '14%', borderBottom: '2px solid #dde1e6'}}>기획</div>
    <div style={{ width: '100%'}}>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
      <div style={{ padding: '14px 16px', borderBottom: '2px solid #dde1e6', fontSize: 20 }}>발상:하정인의 아이디어 창출 능력은 어떠한가?</div>
    </div>
    <div style={{ width: '30%'}}>
      <div style={{ display: 'flex' ,overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
      <div style={{ display: 'flex',overflow: 'hidden'}}>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>74.75</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>15.96</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>80</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>46</div>
        <div style={{ padding: '17px 53px 16px 16px', borderBottom: '2px solid #4d5358' }}>97</div>
      </div>
    </div>
  </div>
</div> */}