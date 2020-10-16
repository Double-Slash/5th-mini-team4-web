import React, { useState } from 'react';

function Main() {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 57 }}>
      <div style={{ 
          width: 232, 
          height: 48, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          border: '1px solid #343A3F',
          backgroundColor: '#343A3F',
          color: 'white',
          marginBottom: 24,
        }}>
        만든 설문
      </div>
      <div style={{ width: 232, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#08BDBA'}}>
        설문 만들기
      </div>
      <List />
    </div>
  )
}

function List() {
  return(
    <div style={{ width: 1392, height: 48 }}>
      <div>제목이 일로온다</div>
    </div>
  )
}

export default Main;