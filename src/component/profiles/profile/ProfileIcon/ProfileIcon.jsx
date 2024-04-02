import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findProfileIcon, largeIconSize } from '../../../../utility/profile/profile-icon'

import { DEFAULT_ICON_COLOUR } from '../../../../config/constants'

import './ProfileIcon.css'

export const ProfileIcon = ({ icon, color = DEFAULT_ICON_COLOUR }) => (
    <FontAwesomeIcon icon={ findProfileIcon(icon) } size={ largeIconSize } className="ProfileIcon" style={ { 'color': color } }/>
)
