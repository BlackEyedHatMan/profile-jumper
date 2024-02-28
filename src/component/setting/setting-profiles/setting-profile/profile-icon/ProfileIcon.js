import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findProfileIcon, smallIconSize } from '../../../../../utility/profile/profile-icon';

import './ProfileIcon.css';

const profileIcon = (props) => (
  <div className="SettingProfileIconWrapper">
    <FontAwesomeIcon icon={findProfileIcon(props.icon)} size={smallIconSize} className="SettingProfileIcon" />
  </div>
);

export default profileIcon;
