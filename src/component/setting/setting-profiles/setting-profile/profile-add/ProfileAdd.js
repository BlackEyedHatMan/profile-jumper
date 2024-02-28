import React from 'react';

import './ProfileAdd.css';

const profileAdd = (props) => (
  <div className="ProfileAdd">
    <input type="button" value="+" onClick={props.handleAdd} disabled={(!props.enabled) ? "disabled" : ""}/>
  </div>
);

export default profileAdd;
