import React from 'react'

import { ProfileIcon } from './ProfileIcon/ProfileIcon'
import { normIconName } from '../../../utility/icon/icon-lib-utility'

import './Profile.css'

export const Profile = ({ profile }) => {
    const linkTitle = profile.title || normIconName(profile.icon)

    return (
        <div className="Profile">
            <a href={ profile.url } title={ linkTitle } target="_blank" rel="noopener noreferrer">
                <ProfileIcon iconName={ profile.icon } color={ profile.iconColor } block={ profile.block }/>
            </a>
        </div>
    )
}
