import React from 'react'

import { ProfileIcon } from './ProfileIcon/ProfileIcon'

import './Profile.css'

export const Profile = ({ icon, url }) => {

    const profileTitle = iconName => iconName.substr(0, 1).toUpperCase() + iconName.substr(1).toLowerCase()

    const linkTitle = profileTitle(icon)

    return (
        <div className="Profile">
            <a href={ url } title={ linkTitle } target="_blank" rel="noopener noreferrer">
                <ProfileIcon icon={ icon }/>
            </a>
        </div>
    )
}
