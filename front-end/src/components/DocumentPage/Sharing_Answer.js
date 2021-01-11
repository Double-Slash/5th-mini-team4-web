import React, { useState } from "react";
import "../../css/Sharing_Answer.css";
import { UserAvatar32 } from "@carbon/icons-react";
const Sharing_Answer = ({ answer }) => {
  return (
    <>
      <div className="Sharing_Answer_container">
        <div className="Sharing_user">
          <UserAvatar32 />
        </div>
        <div className="Sharing_user">{answer.name}</div>
        <div className="Sharing_user">{answer.mail}</div>
      </div>
    </>
  );
};

export default Sharing_Answer;
