import React from 'react';

import './ProfileRemove.css';

const profileRemove = (props) => (
  <div className="ProfileRemove">
    <input type="button" value="-" onClick={props.handleRemove}/>
  </div>
);

export default profileRemove;
