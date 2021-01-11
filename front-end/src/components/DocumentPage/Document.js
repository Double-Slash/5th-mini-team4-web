import React from "react";
import Personal from "./Personal";
import Sharing from "./Sharing";
import "../../css/Document.css";
const Document = () => {
  return (
    <>
      <div className="Document_container">
        <div className="Document_personal">
          <Personal></Personal>
        </div>
        <div className="Document_sharing">
          <Sharing></Sharing>
        </div>
      </div>
    </>
  );
};

export default Document;
