import React, { useState } from 'react';
import AnalysisList from '../../components/Analysis/AnalysisList';

function Analysis() {
  const [leftSelect, setLeftSelect] = useState('')
  const [rightSelect, setRightSelect] = useState('')
  
  const onMenuClick = (text) => {
    if (text === '질문' || text === '응답'){
      setLeftSelect(text)
    }
    else{
      setRightSelect(text)
    }
  }

  const leftMenu = [
    {
      id: 1,
      text: '질문'
    },
    {
      id: 2,
      text: '응답'
    }
  ]
  const rightMenu = [
    {
      id: 1,
      text: '숫자 입력'
    },
    {
      id: 2,
      text: '5점 질문'
    },
    {
      id: 3,
      text: '예/아니오'
    },
    {
      id: 4,
      text: '다중 선택'
    },
  ]
  return (
    <div>
      <AnalysisList
        leftMenu={leftMenu}
        rightMenu={rightMenu}
        leftSelect={leftSelect}
        rightSelect={rightSelect}
        onMenuClick={onMenuClick} 
      />
    </div>
  );
}

export default Analysis;