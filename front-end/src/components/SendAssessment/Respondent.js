import React, { useState } from "react";
import {
  Checkbox32,
  CheckboxCheckedFilled32,
  Close32,
  UserAvatar32,
} from "@carbon/icons-react";

function Respondent({ respondent, onRemove }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="respondent-wrapper">
      <div className="email-wrapper">
        <UserAvatar32 />
        <label className="email-no-userName">미입력</label>
        <div className="respondent-label">{respondent.email}</div>
        <div onClick={() => onRemove(respondent.id)}>
          <Close32 />
        </div>
      </div>
    </div>
  );
}

export default Respondent;
