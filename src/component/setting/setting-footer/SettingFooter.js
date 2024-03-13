import React from 'react'

import { BrandingLogo } from '../../branding/logo/BrandingLogo'
import { FooterInfo } from './footer-info/FooterInfo'

import './SettingFooter.css'

export const SettingFooter = () => (
  <div className="SettingFooter">
    <BrandingLogo/>
    <FooterInfo/>
  </div>
)
