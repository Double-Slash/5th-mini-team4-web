import React, { useState } from 'react';
import './Login.css'

import arrowright from '../../images/arrowright.svg';
import checkbox from '../../images/checkbox.svg';
import checked from '../../images/checked.svg';
import info from '../../images/info.svg'
import google from '../../images/google.svg'

function Login() {
  const [remember, setRemember] = useState(false);

  const onRemember = () => {
    setRemember(!remember);
  }

  return (
    <div className='loginBack'>
      <div style={{ position: 'relative', left: 180, top:72, width: 464}}>
        
        <div style={{ fontSize: 32, fontWeight: 'bold'}}>Log in</div>
        
        <div style={{ display: 'flex'}}>
          <div>Don't have an account?</div>
          <div className='signUpButton'>Create an Assessment id</div>
        </div>
       
        <div style={{ border:'1px solid #dde1e6', marginTop: 49}} />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '14px 0 14px 0'}}>
          <div className='infoLabel'>Continue with Assessment id</div>
          <div style={{ fontSize: 12, color: '#08bdba'}}>Forgot ID?</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <input 
            className='loginInput'
            placeholder='userEmail@Email.com'/>
          
          <div style={{ marginTop: 16 }}/>
          
          <div>
            <input 
              type='password'
              className='passwordInput'
              placeholder='Password'/>
          </div>

          <div style={{ marginTop: 16 }}/>

          <div className='loginButton'>
            <div style={{ fontSize: 20, color: 'white'}}>Continue</div>
            <img src={arrowright} style={{ width: 32, height: 32}}/>
          </div>
        </div>
        
        <div style={{ marginTop: 24 }}/>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img onClick={onRemember} src={remember ? checked : checkbox} style={{ width: 32, height: 32}}/>
          
          <div style={{ marginLeft: 8 }}/>
          
          <div style={{ fontSize: 16 }}>Remeber ID</div>

          <div style={{ marginLeft: 20 }}/>
          
          <img src={info} style={{ width: 24, height: 24}}/>
        </div>

        <div style={{ border:'1px solid #f2f4f8', marginTop: 42 }} />

        <div style={{ marginTop: 15 }}/>

        <div>
          <div className='infoLabel'>Alternative logins</div>
          
          <div style={{ marginTop: 14 }}/>
          
          <div className='googleButton'>
            <div style={{ fontSize: 20, color: '#08bdba' }}>Log in with Google</div>
            <img src={google} style={{ width: 32, height: 32 }} />
          </div>
        </div>

        <div style={{ border:'1px solid #f2f4f8', marginTop: 31 }} />

        <div style={{ marginTop: 17 }}/>

        <div style={{ display: 'flex' }}>
          <div className='infoLabel'>Need help?</div>
          <div className='helpButton'>Contact the Assessement help desk</div>
        </div>
      </div>
    </div>
  );
}

export default Login;