import React from 'react'

import ProfileJumperPopupLogo from '../../../../asset/logo/profile-jumper-popup-logo.png'

import { WEBSITE_LINK_ALT, WEBSITE_LINK_SETTINGS } from '../../../../config/constants'

import './SettingLogo.css'

export const SettingLogo = () => (
    <div className="SettingLogo">
        <a href={ WEBSITE_LINK_SETTINGS } target="_blank" rel="noopener noreferrer" title={ WEBSITE_LINK_ALT }>
            <img src={ ProfileJumperPopupLogo } alt="Profile Jumper!"/>
        </a>
    </div>
)
