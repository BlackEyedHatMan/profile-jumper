import React from 'react';

import './BrandingLogo.css';

import ProfileJumperPopupLogo from '../../../asset/logo/profile-jumper-popup-logo.png';

const brandingLogo = () => (
  <div className="BrandingLogo">
    <a href="https://profile-jumper.github.io" target="_blank" rel="noopener noreferrer" title="Profile Jumper! - See website for info">
        <img src={ProfileJumperPopupLogo} alt="Profile Jumper" />
    </a>
  </div>
);

export default brandingLogo;
