import React from 'react'

import { APP_VERSION } from '../../../../config/constants.js'

import './FooterInfo.css'

export const FooterInfo = () => (
    <div className="FooterInfo">
        <h1><a href="https://profile-jumper.github.io" className="BrandingLink" target="_blank" rel="noopener noreferrer"
               title="Profile Jumper! - See website for info">Profile Jumper!</a> <span className="BrandingInfoVersion">({ APP_VERSION })</span></h1>
        <p>Jump between any of your online profiles. <br/>By adding or removing profiles, this will configure your profiles instantly.</p>
    </div>
)
