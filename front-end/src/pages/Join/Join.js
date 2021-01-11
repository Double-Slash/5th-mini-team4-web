import React, { useState } from 'react';
import './Join.css'

import checkbox from '../../images/checkbox.svg';
import checked from '../../images/checked.svg';

import { ArrowRight32, Information32, NoImage16 } from "@carbon/icons-react";

function Join({ history }) {
  const effectPw = '비밀번호가 일치하지 않습니다.'
  const [remember, setRemember] = useState(false);
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
  })

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  
  const onRemember = () => {
    setRemember(!remember);
  }

  const onSignUp = () => {
    if(remember){
      localStorage.setItem('userId',inputs.userId);
    }
    if(inputs.password === inputs.passwordCheck){
      history.push('/login');
    }
    else{
      alert("비밀번호가 다릅니다. 확인해주세요!");
    }
  }
  
  return (
    console.log(inputs),
    <div className='joinBack'>
      <div className='join-wrapper'>
        <div className="joinContainer">
            
          <div style={{ border:'1px solid #dde1e6', marginTop: 49}} /> 
    
          <div style={{ display: 'flex', flexDirection: 'column'}}>

            <div>
              <div style={{ color: '#696969', marginTop: 17 }}>사용할 이메일</div>
              <input 
                name='userId'
                value={inputs.userId}
                onChange={onChange}
                className='joinInput'
                placeholder='userEmail@Email.com'/>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
              <img onClick={onRemember} src={remember ? checked : checkbox} style={{ width: 32, height: 32}} alt="remember"/>
              
              <div style={{ fontSize: 16, marginLeft: 8, marginRight: 20 }}>Remember ID</div>
              
              <Information32 style={{ color: '#dde1e6'}}/>

              { inputs.userId ? 
                <div style={{ marginLeft: 16, color: '#18bdba'}}>사용가능한 이메일입니다.</div> 
                : <div style={{ marginLeft: 16, color: '#da1e28'}}>사용할 수 없는 이메일입니다.</div>
              }
            </div>
              
              <div style={{ border:'1px solid #dde1e6', marginTop: 30}} /> 
              
            <div>
              <div style={{ color: '#696969', marginTop: 16 }}>비밀번호</div> 
              <div style={{ marginTop: 10}}/>
              <div>
                <input 
                  name='password'
                  value={inputs.password}
                  onChange={onChange}
                  type='password'
                  className='joinInput'
                  placeholder='Password ex) 1234abcd'/>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center',marginTop: 16}}>
                <div style={{ color: '#696969' }}>비밀번호 확인</div>
        
                <div style={{ marginLeft: 12 }}/>

                <Information32 style={{ color: '#dde1e6'}}/>

                <div style={{ marginLeft: 16, color: '#da1e28' }}>
                  { inputs.password === inputs.passwordCheck ? null : effectPw}
                </div>
              </div>

              <input
                name='passwordCheck'
                value={inputs.passwordCheck}
                onChange={onChange}
                type='password'
                className='joinInput'
                placeholder='Password check'/>
            </div>
            
            <div>
              <div style={{ color: '#696969', marginTop: 16 }}>이름</div>
              <input
                name='name'
                value={inputs.name}
                onChange={onChange}
                type='nickname'
                className='joinInput'
                placeholder='Name ex)홍길동'/>
            </div>

            <div>
              <div style={{ color: '#696969', marginTop: 16 }}>전화번호</div>
              <input
                name='phone'
                value={inputs.phone}
                onChange={onChange}
                className='joinInput'
                placeholder='082-010-1234-5678'/>
            </div>
    
            <div className='joinButton' onClick={onSignUp}>
              <div style={{ fontSize: 20, color: 'white'}}>Continue</div>
              <ArrowRight32 style={{ color: '#ffffff'}}/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Join;