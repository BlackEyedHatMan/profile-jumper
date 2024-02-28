import React from 'react';

import ProfileIcon from './ProfileIcon/ProfileIcon';

import './Profile.css';

const profile = (props) => {

  const profileTitle = iconName => iconName.substr(0, 1).toUpperCase() + iconName.substr(1).toLowerCase();

  const linkTitle = profileTitle(props.icon);

  return (
    <div className="Profile">
      <a href={props.url} title={linkTitle} target="_blank" rel="noopener noreferrer">
          <ProfileIcon icon={props.icon}/>
      </a>
    </div>
  );

}

export default profile;
