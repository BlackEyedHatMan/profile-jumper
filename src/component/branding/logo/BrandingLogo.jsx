import React from 'react'

import ProfileJumperPopupLogo from '../../../asset/logo/profile-jumper-popup-logo.png'

import { WEBSITE_LINK_ALT, WEBSITE_LINK_LOGO } from '../../../config/constants'

import './BrandingLogo.css'

export const BrandingLogo = () => (
    <div className="BrandingLogo">
        <a href={ WEBSITE_LINK_LOGO } target="_blank" rel="noopener noreferrer" title={ WEBSITE_LINK_ALT }>
            <img src={ ProfileJumperPopupLogo } alt="Profile Jumper!"/>
        </a>
    </div>
)
