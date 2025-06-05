import React from 'react'

import { BLOCKED_ICON_COLOUR, DEFAULT_ICON_COLOUR } from '../../../../config/constants'
import { LibraryIcon } from '../../../icon/LibraryIcon'
import { useBlockStatus } from '../../../../hooks/useBlockStatus'

import './ProfileIcon.css'

export const ProfileIcon = ({iconName, color = DEFAULT_ICON_COLOUR, block}) => {
    const isBlocked = useBlockStatus(block)

    const displayColor = (block && isBlocked) ? BLOCKED_ICON_COLOUR : color

    return (
        <LibraryIcon iconName={iconName} color={displayColor} className="ProfileIcon"/>
    )
}
