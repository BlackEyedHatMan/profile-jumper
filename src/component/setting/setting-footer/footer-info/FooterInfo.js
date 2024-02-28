import React from 'react';

import { app_version } from '../../../../config/constants.js'

import './FooterInfo.css';

const footerInfo = (props) => (
  <div className="FooterInfo">
    <h1><a href="https://profile-jumper.github.io" className="BrandingLink" target="_blank" rel="noopener noreferrer" title="Profile Jumper! - See website for info">Profile Jumper!</a> <span className="BrandingInfoVersion">({app_version})</span></h1>
    <p>Jump between any of your online profiles. <br/>By adding or removing profiles, this will configure your profiles instantly.</p>
  </div>
);

export default footerInfo;
