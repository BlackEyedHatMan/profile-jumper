import React from 'react'

import { APP_VERSION, WEBSITE_LINK, WEBSITE_LINK_ALT } from '../../../../config/constants.js'

import './FooterInfo.css'

export const FooterInfo = () => (
    <div className="FooterInfo">
        <h1>
            <a href={ WEBSITE_LINK }
               className="BrandingLink"
               target="_blank"
               rel="noopener noreferrer"
               title={ WEBSITE_LINK_ALT }>Profile Jumper!</a>
            <span className="BrandingInfoVersion">Version { APP_VERSION }</span>
        </h1>
        <p>Jump easily between your profiles! <br/>Add or remove profiles - this will update your profile links instantly.</p>
    </div>
)
