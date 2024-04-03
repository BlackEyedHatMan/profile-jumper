import React from 'react'

import { DEFAULT_ICON_COLOUR } from '../../../../config/constants'
import { LibraryIcon } from '../../../icon/LibraryIcon'

import './ProfileIcon.css'

export const ProfileIcon = ({ icon, color = DEFAULT_ICON_COLOUR }) => (
    <LibraryIcon name={ icon } color={color} className="ProfileIcon" />
)
