import React from 'react'

import { SettingLogo } from './logo/SettingLogo'

import { WEBSITE_LINK, WEBSITE_LINK_ALT } from '../../../config/constants'

import './SettingHeader.css'

export const SettingHeader = () => (
    <div className="SettingHeader">

        <SettingLogo/>

        <div className="SettingInfo">
            <h1>
                <a href={ WEBSITE_LINK }
                   className="BrandingLink"
                   target="_blank"
                   rel="noopener noreferrer"
                   title={ WEBSITE_LINK_ALT }>Profile Jumper!</a>
                <span>Settings</span></h1>
            <p>Enter your profile link URL & Title (icon will automatically change). Then click on the "+" button to add your profile.</p>
        </div>
    </div>
)
