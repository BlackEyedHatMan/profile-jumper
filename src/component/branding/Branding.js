import React from 'react'

import { BrandingLogo } from './logo/BrandingLogo'
import { BrandingInfo } from './info/BrandingInfo'

import './Branding.css'

const branding = () => (
  <div className="Branding">
    <BrandingLogo/>
    <BrandingInfo/>
  </div>
)

export default branding
