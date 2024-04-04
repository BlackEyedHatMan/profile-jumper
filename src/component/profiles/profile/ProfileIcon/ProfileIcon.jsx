import React from 'react'

import { DEFAULT_ICON_COLOUR } from '../../../../config/constants'
import { LibraryIcon } from '../../../icon/LibraryIcon'

import './ProfileIcon.css'

export const ProfileIcon = ({ iconName, color = DEFAULT_ICON_COLOUR }) => (
    <LibraryIcon iconName={ iconName } color={color} className="ProfileIcon" />
)
