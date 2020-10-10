import React from "react";
import './Search.css'
const Search = ({onChange, search}) => {

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            onChange={onChange}
            value={search}
            type="text"
            className="searchTerm"
            placeholder="검색"
          />
          <button className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
