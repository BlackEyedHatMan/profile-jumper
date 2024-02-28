import React from 'react';

import BrandingLogo from '../../branding/logo/BrandingLogo';
import FooterInfo from './footer-info/FooterInfo';

import './SettingFooter.css';

const settingFootter = (props) => (
  <div className="SettingFooter">
    <BrandingLogo/>
    <FooterInfo/>
  </div>
);

export default settingFootter;
