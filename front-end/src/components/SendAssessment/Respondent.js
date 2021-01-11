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
        <div className="respondent-label">{respondent.email}</div>
        <div onClick={() => onRemove(respondent.id)}>
          <Close32 />
        </div>
      </div>
      <div onClick={() => setChecked(!isChecked)}>
        {isChecked ? <CheckboxCheckedFilled32 /> : <Checkbox32 />}
      </div>
    </div>
  );
}

export default Respondent;
