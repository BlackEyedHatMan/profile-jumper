import React, { useState } from 'react'

import { ColorPicker } from '../../../../color-picker/ColorPicker'

import { DEFAULT_ICON_COLOUR } from '../../../../../config/constants'
import { LibraryIcon } from '../../../../icon/LibraryIcon'

import './SettingProfileIcon.css'

export const SettingProfileIcon = ({ iconName, onColorChange, color = DEFAULT_ICON_COLOUR }) => {
    const [showColorPicker, setShowColorPicker] = useState(false)

    const onColorChoose = (color) => {
        onColorChange(color)
        toggleColorPicker()
    }

    const toggleColorPicker = () => setShowColorPicker(!showColorPicker)

    return (
        <div className="SettingProfileIconWrapper">
            <ColorPicker visible={ showColorPicker } onColorChoose={ onColorChoose } defaultColor={ color }/>
            <LibraryIcon name={ iconName } color={ color } className="SettingProfileIcon" onClick={ toggleColorPicker }/>
        </div>
    )
}
