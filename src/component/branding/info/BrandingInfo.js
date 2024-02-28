import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcon from '@fortawesome/free-solid-svg-icons';

import { app_version } from '../../../config/constants.js'

import './BrandingInfo.css';

const brandingInfo = () => (
  <React.Fragment>
    <div className="BrandingInfo">
      <h1><a href="https://profile-jumper.github.io" className="BrandingLink" target="_blank" rel="noopener noreferrer" title="Profile Jumper! - See website for info">Profile Jumper!</a> <span className="BrandingInfoVersion">({app_version})</span></h1>
      <p>Jump between any of your online profiles! Click on cogs or right-click icon for "options" to configure instantly.</p>
    </div>
    <div className="ConfigureInfo">
      <a className="ConfigureClick" href="#settings" target="_blank" rel="noopener noreferrer" title="Click here to configure - Profile Jumper!"><FontAwesomeIcon icon={SolidIcon.faCogs} size="2x" /></a>
    </div>
  </React.Fragment>
);

export default brandingInfo;
