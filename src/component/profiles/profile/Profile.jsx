import React from 'react'

import { capitalize } from '../../../utility/string/string-utility'
import { ProfileIcon } from './ProfileIcon/ProfileIcon'

import './Profile.css'

export const Profile = ({ profile }) => {
    const linkTitle = profile.title || capitalize(profile.icon)

    return (
        <div className="Profile">
            <a href={ profile.url } title={ linkTitle } target="_blank" rel="noopener noreferrer">
                <ProfileIcon icon={ profile.icon }/>
            </a>
        </div>
    )
}
