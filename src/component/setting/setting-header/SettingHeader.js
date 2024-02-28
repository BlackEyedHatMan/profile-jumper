import React from 'react';

import SettingLogo from './logo/SettingLogo';

import './SettingHeader.css';

const settingHeader = (props) => (
  <div className="SettingHeader">
    <SettingLogo/>

    <div className="SettingInfo">
      <h1>Profile Jumper!</h1>
      <p><b>Settings</b>: Enter you profile URL, Title (icon will automatically change). Then click on the "+" button.</p>
    </div>
  </div>
);

export default settingHeader;
