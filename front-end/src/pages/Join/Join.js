import React, { useState } from 'react';
import './Join.css'

import arrowright from '../../images/arrowright.svg';
import checkbox from '../../images/checkbox.svg';
import checked from '../../images/checked.svg';
import info from '../../images/info.svg'

function Join() {
    const [remember, setRemember] = useState(false);
  
    const onRemember = () => {
      setRemember(!remember);
    }
  
    return (

      <div className='joinBack'>
        <div className='join-wrapper'>
        <div style={{ position: 'relative', top:72, width: 464}}>
          <div style={{ border:'1px solid #dde1e6', marginTop: 49}} /> 
  
          <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ marginTop: 17}}/>
            <div style={{ color: '#696969' }}>사용할 이메일</div>
            <div style={{ marginTop: 10}}/>
            <input 
              className='idInput'
              placeholder='userEmail@Email.com'/>

            <div style={{ display: 'flex', marginTop: 5 }}>
             <img onClick={onRemember} src={remember ? checked : checkbox} style={{ width: 32, height: 32}}/>

             <div style={{ marginLeft: 8 }}/>
             <div style={{ fontSize: 16, marginTop: 5 }}>Remeber ID</div>
             <div style={{ marginLeft: 10 }}/>

             <img src={info} style={{ width: 24, height: 24, marginTop: 5 }}/>
            </div>
            
            <div style={{ border:'1px solid #dde1e6', marginTop: 30}} /> 
            <div style={{ marginTop: 16 }}/>
            
            <div style={{ color: '#696969' }}>비밀번호</div> 
            <div style={{ marginTop: 10}}/>
            <div>
              <input 
                type='password'
                className='passwordInput'
                placeholder='Password'/>
            </div>

            <div style={{ marginTop: 16 }}/>

            <div style={{ color: '#696969' }}>비밀번호 확인</div>
    
            <div style={{ marginLeft: 10 }}/>

            <div>
            <input 
              type='password'
              className='passwordCheckInput'
              placeholder='Password check'/>
           </div>

           <div style={{marginTop: 16}}/>

           <div style={{ color: '#696969' }}>이름</div>
           <div style={{ marginTop: 10}}/>
           <div>
             <input
              type='nickname'
              className='nameInput'
              placeholder='Name ex)홍길동'/>
           </div>

           <div style={{ marginTop: 34 }}/>
  
           <div className='joinButton'>
           <div style={{ fontSize: 20, color: 'white'}}>Continue</div>
            <img src={arrowright} style={{ width: 32, height: 32, marginLeft: 300}}/>
            </div>
        </div>
    </div>
    </div> 
    </div>
    );
}

export default Join;