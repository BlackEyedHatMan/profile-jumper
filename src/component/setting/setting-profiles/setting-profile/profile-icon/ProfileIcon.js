import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon, smallIconSize } from '../../../../../utility/profile/profileIcon';

import './ProfileIcon.css';

const profileIcon = (props) => (
  <div className="SettingProfileIconWrapper">
    <FontAwesomeIcon icon={getIcon(props.icon)} size={smallIconSize} className="SettingProfileIcon" />
  </div>
);

export default profileIcon;
