import React from 'react'

import './Profile.css'

import ProfileIcon from './ProfileIcon/ProfileIcon'

const profile = ({icon, url}) => {

  const profileTitle = iconName => iconName.substr(0, 1).toUpperCase() + iconName.substr(1).toLowerCase()

  const linkTitle = profileTitle(icon);

  return (
    <div className="Profile">
      <a href={url} title={linkTitle} target="_blank" rel="noopener noreferrer">
          <ProfileIcon icon={icon}/>
      </a>
    </div>
  )

}

export default profile;
