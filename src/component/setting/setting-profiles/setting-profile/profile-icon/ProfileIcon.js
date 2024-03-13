import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findProfileIcon, smallIconSize } from '../../../../../utility/profile/profile-icon'

import './ProfileIcon.css'

export const ProfileIcon = ({ icon }) => (
  <div className="SettingProfileIconWrapper">
    <FontAwesomeIcon icon={findProfileIcon(icon)} size={smallIconSize} className="SettingProfileIcon" />
  </div>
)
