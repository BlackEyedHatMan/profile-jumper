import React, { useState } from 'react'

import { ColorPicker } from '../../../../color-picker/ColorPicker'

import { BLOCKED_ICON_COLOUR, DEFAULT_ICON_COLOUR } from '../../../../../config/constants'
import { LibraryIcon } from '../../../../icon/LibraryIcon'
import { useOutsideClick } from '../../../../../hooks/useOutsideClick'
import { useBlockStatus } from '../../../../../hooks/useBlockStatus'

import './SettingProfileIcon.css'

export const SettingProfileIcon = ({iconName, onColorChange, color = DEFAULT_ICON_COLOUR, block}) => {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const ref = useOutsideClick(() => setShowColorPicker(false))

    const isBlocked = useBlockStatus(block)

    const onColorChoose = (color) => {
        onColorChange(color)
        toggleColorPicker()
    }

    const toggleColorPicker = () => setShowColorPicker(!showColorPicker)

    const displayColor = (block && isBlocked) ? BLOCKED_ICON_COLOUR : color

    return (
        <div className="SettingProfileIconWrapper">
            <ColorPicker visible={showColorPicker} onColorChoose={onColorChoose} defaultColor={color} ref={ref}/>
            <LibraryIcon iconName={iconName} color={displayColor} className="SettingProfileIcon" onClick={toggleColorPicker}/>
        </div>
    )
}
