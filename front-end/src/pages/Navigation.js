import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Navigation.css";

// Navbar 최종시 없앨예정 개발시 페이지 구성 편의를 위해
const Navigation = () => {
    return(
        <>
        <div className="nav">
            <Link to="/">HOME</Link>
            <Link to="/assessment">Assessment</Link>
            <Link to="/createassessment">createassessment</Link>
            <Link to="/document">document</Link>
        </div>
        </>
    )
}

export default Navigation;