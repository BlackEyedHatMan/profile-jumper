import React from 'react'

import { BrandingLogo } from './logo/BrandingLogo'
import { BrandingInfo } from './info/BrandingInfo'

import './Branding.css'

export const Branding = () => (
    <div className="Branding">
        <BrandingLogo/>
        <BrandingInfo/>
    </div>
)
