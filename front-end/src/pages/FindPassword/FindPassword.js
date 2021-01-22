import React, { useState } from 'react';
import '../../css/FindPassword.css'

import { Information32, View32, ViewOff32, Undo32 } from "@carbon/icons-react";
import emailDot from '../../images/emaildot.svg'

function FindPassword({ history }){
  const [inputs, setInputs] = useState({
    userId: '',
    userName: '',
    password: '',
    passwordCheck: '',
  });
  const [code, setCode] = useState('');
  const [confirm , setConfirm] = useState(false);
  const [viewOn, setViewOn ] = useState(false);
  const [passwords, setPasswords] = useState({
    password: '',
    passwordCheck: ''
  });

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  
  const onChangePassword = (e) => {
    const { value, name } = e.target
    setInputs({
      ...passwords,
      [name] : value
    })
  }

  const onViewOn = () => {
    setViewOn(!viewOn);
  }

  const onClickButton = () => {
    history.push('/login')
  }

  return (
    <div className='Background'>
      <div className='FindContainer'>
        
        <div>
          <div style={{ border:'1px solid #dde1e6' }} />
          <div style={{ color: '#696969', marginTop: 17 }}>가입된 이메일</div>
          <input 
            name='userId'
            value={inputs.userId}
            onChange={onChange}
            className='findInput'
            placeholder='userEmail@Email.com'/>
        </div>

        <div>
          <div style={{ border:'1px solid #dde1e6' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 17 }}>
            <div style={{ color: '#696969' }}>사용자 이름</div>
            <Information32 style={{ color: '#dde1e6', marginLeft: 90 }} />
            <div style={{ marginLeft: 17, color: '#da1e28'}}>회원정보가 일치 하지 않습니다.</div>
          </div>
          <input 
            name='userName'
            value={inputs.userName}
            onChange={onChange}
            className='findInput'
            placeholder='Name ex) 홍길동'/>
        </div>

        <div style={{ border:'1px solid #dde1e6', marginTop: 16, marginBottom: 16 }} />

        <div className='findButton'>
          <div style={{ fontSize: 20, color: 'white'}}>인증 코드 요청하기</div>
          <img src={emailDot} style={{ width: 32, height: 32 }}/>
        </div>

        <div>
          <div style={{ border:'1px solid #dde1e6' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 17 }}>
            <div style={{ color: '#696969' }}>인증 코드 입력</div>
            <Information32 style={{ color: '#dde1e6', marginLeft: 90 }} />
            <div style={{ marginLeft: 17, color: '#da1e28'}}>인증 코드가 일치하지 않습니다.</div>
          </div>
          <input 
            //name='userName'
            //value={inputs.userId}
            //onChange={onChange}
            className='findInput'/>
        </div>

        <div>
          <div style={{ border:'1px solid #dde1e6' }} />
          <div style={{ color: '#696969', marginTop: 17 }}>새 비밀번호</div>
        </div>
        
        <div className='newPasswordContatiner'>
          <input 
            name='password'
            type={viewOn ? 'text' : 'password'}
            value={inputs.password}
            onChange={onChange}
            className='newPasswordInput'
            placeholder='Password'/>
          { viewOn ? <View32 onClick={onViewOn} /> : <ViewOff32 onClick={onViewOn} /> }
        </div> 

        <div>
          <div style={{ border:'1px solid #dde1e6' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 17 }}>
            <div style={{ color: '#696969' }}>비밀번호 확인</div>
            <Information32 style={{ color: '#dde1e6', marginLeft: 90 }} />
            {
              inputs.password === inputs.passwordCheck ?
                null : 
                <div style={{ marginLeft: 17, color: '#da1e28'}}>비밀번호가 일치 하지 않습니다.</div>
              }
          </div>
        </div>
        
        <div className='newPasswordContatiner'>
          <input 
            name='passwordCheck'
            type={viewOn ? 'text' : 'password'}
            value={inputs.passwordCheck}
            onChange={onChange}
            className='newPasswordInput'
            placeholder='Password'/>
          { viewOn ? <View32 onClick={onViewOn} /> : <ViewOff32 onClick={onViewOn} /> }
        </div>

        <div className='BackloginButton' onClick={onClickButton}>
          <div style={{ fontSize: 20, color: 'white'}}>Back to login</div>
          <Undo32 style={{ color: 'white'}}/>
        </div>

      </div>
    </div>
  );
}

export default FindPassword;