import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';

import google from '../../images/google.svg';

import { ArrowRight32, Information32, View32, ViewOff32, Checkbox32, CheckboxCheckedFilled32 } from "@carbon/icons-react";

function Login({ history }) {
  const [inputs, setInputs] = useState({
    userId: localStorage.getItem('userId'),
    password: ''
  })
  const [loginState, setLoginState] = useState('');
  const [remember, setRemember] = useState(false);
  const [viewOn, setViewOn ] = useState(false);

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

  const onViewOn = () => {
    setViewOn(!viewOn);
  }

  const onClickJoin = () => {
    history.push('/join');
  }

  const onClickLogin = () => {
    if(remember){
      localStorage.setItem('userId',inputs.userId);
      axios.post('http://18.217.119.212:8080/api/auth/login', {
        email: inputs.userId,
        password: inputs.password
      }).then( response => {
        console.log(response)
        history.push('/main');
      }).catch( err =>{
        console.log(err);
      })
    }
    else{
      axios.post('http://18.217.119.212:8080/api/auth/login', {
        email: inputs.userId,
        password: inputs.password
      }).then( response => {
        console.log(response)
        history.push('/main');
      }).catch( err =>{
        console.log(err);
      })
    }
  }

  return (
    <div className='Background'>
      <div className='Container'>
        
        <div style={{ fontSize: 32, fontWeight: 'bold'}}>Log in</div>
        
        <div style={{ display: 'flex'}}>
          <div>Don't have an account?</div>
          <div
            onClick={onClickJoin} 
            className='signUpButton'>Create an Assessment id</div>
        </div>
       
        <div style={{ border:'1px solid #dde1e6', marginTop: 49}} />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '14px 0 14px 0'}}>
          <div className='infoLabel'>Continue with Assessment id</div>
          <div
            onClick={() => history.push('/findpassword')} 
            style={{ fontSize: 12, color: '#08bdba', cursor: 'pointer'}}>Forgot ID?</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <input 
            name="userId"
            onChange={onChange}
            value={inputs.userId}
            className='loginInput'
            placeholder='userEmail@Email.com'/>
                    
          <div className='passwordContatiner'>
            <input 
              type={viewOn ? 'text' : 'password'}
              name="password"
              onChange={onChange}
              value={inputs.password}
              className='pwInput'
              placeholder='Password'/>
            { viewOn ? <View32 onClick={onViewOn} /> : <ViewOff32 onClick={onViewOn} /> }
          </div>

          <div className='loginButton' onClick={onClickLogin}>
            <div style={{ fontSize: 20, color: 'white'}}>Continue</div>
            <ArrowRight32 style={{ color: '#ffffff'}}/>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
          { remember ? <CheckboxCheckedFilled32 onClick={onRemember} /> : <Checkbox32 onClick={onRemember} />}
          
          <div style={{ fontSize: 16, marginLeft: 8, marginRight: 20 }}>Remember ID</div>
          
          <Information32 style={{ color: '#dde1e6'}}/>

          <div style={{ marginLeft: 16, color: '#da1e28' }}>{loginState}</div>
        </div>

        <div style={{ border:'1px solid #f2f4f8', marginTop: 42 }} />

        <div style={{ marginTop: 15 }}>
          <div className='infoLabel'>Alternative logins</div>
                    
          <div className='googleButton'>
            <div style={{ fontSize: 20, color: '#08bdba' }}>Log in with Google</div>
            <img src={google} style={{ width: 32, height: 32 }} alt="google"/>
          </div>
        </div>

        <div style={{ border:'1px solid #f2f4f8', marginTop: 31 }} />

        <div style={{ display: 'flex', marginTop: 17 }}>
          <div className='infoLabel'>Need help?</div>
          <div className='helpButton'>Contact the Assessement help desk</div>
        </div>
      </div>
    </div>
  );
}

export default Login;