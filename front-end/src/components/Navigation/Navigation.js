import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    return(
        <>
        <div className="nav">
            <Link to="/">HOME</Link>
            <Link to="/assessment">Assessment</Link>
            <Link to="/category">Category</Link>
        </div>
        </>
    )
}

export default Navigation;