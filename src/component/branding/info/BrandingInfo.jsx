import React from 'react'

import { DisplayIcon } from '../../icon/DisplayIcon'

import { APP_VERSION, WEBSITE_LINK, WEBSITE_LINK_ALT } from '../../../config/constants.js'

import './BrandingInfo.css'

export const BrandingInfo = () => (
    <React.Fragment>
        <div className="BrandingInfo">
            <h1>
                <a href={ WEBSITE_LINK }
                   className="BrandingLink"
                   target="_blank"
                   rel="noopener noreferrer"
                   title={ WEBSITE_LINK_ALT }>Profile Jumper!</a>
                <span className="BrandingInfoVersion">Version { APP_VERSION }</span>
            </h1>
            <p>Jump easily between your profiles!</p>
            <p>Click the "gears" or right-click extension icon for "options" to update your profile links instantly.</p>
        </div>
        <div className="ConfigureInfo">
            <a className="ConfigureClick" href="#settings" target="_blank" rel="noopener noreferrer" title="Click here to update your profile links - Profile Jumper!">
                <DisplayIcon icon="FaCogs"/>
            </a>
        </div>
    </React.Fragment>
)
