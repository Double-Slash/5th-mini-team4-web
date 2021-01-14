import React, { useState } from 'react';

import AnalysisHeader from './AnalysisHeader';
import AnalysisBar from './AnalysisBar'

import { Download32, Search32, Settings32 } from "@carbon/icons-react";

function AnalysisList(props) {
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
        
      </div>
    </div>
  );
}

export default AnalysisList;