import React from "react";
import "./Header.css";
import HeaderImage from '../../images/Header.PNG';
const Header = () => {
  return (
    <>
      <div className="container2">
        <div>
          <img src={HeaderImage} />
        </div>
      
        <div className="right">
          <i className="far fa-bell"></i>
          <i className="fas fa-user-circle"></i>
          <span id="i">사용자</span>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
