import React, { useState } from 'react';

function AnalysisBar(props) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent:'space-between'}}>
        <div>
          <LineMenu 
            items={props.leftMenu}
            leftSelect={props.leftSelect}
            onMenuClick={props.onMenuClick}
          />
        </div>
        <div>
          <LineMenu 
            items={props.rightMenu}
            rightSelect={props.rightSelect}
            onMenuClick={props.onMenuClick} 
          />
        </div>
      </div>
    </>
  );
}

function LineMenu({ 
  items, 
  onMenuClick, 
  rightSelect, 
  leftSelect 
}) {
  return (
    <div style={{ display: 'flex'}}>
      {
        items.map((item,index) => {
          return(   
            <div
              key={index} 
              onClick={() => onMenuClick(item.text)}
              style={{ 
                padding: '12px 147px 12px 16px',
                borderBottom: leftSelect === item.text || rightSelect === item.text ? '2px solid #08bdba' : null,
                fontWeight: leftSelect === item.text || rightSelect === item.text ? 'bold': null
            }}>{item.text}</div>
          )
        })
      }
    </div>
  )
}

export default AnalysisBar;