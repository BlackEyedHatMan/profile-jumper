import React from 'react'

import { capitalize } from '../../../utility/string/string-utility'
import { ProfileIcon } from './ProfileIcon/ProfileIcon'

import './Profile.css'

export const Profile = ({ icon, url }) => {
    const profileTitle = iconName => capitalize(iconName)
    const linkTitle = profileTitle(icon)

    return (
        <div className="Profile">
            <a href={ url } title={ linkTitle } target="_blank" rel="noopener noreferrer">
                <ProfileIcon icon={ icon }/>
            </a>
        </div>
    )
}
