import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { findProfileIcon, smallIconSize } from '../../../../../utility/profile/profile-icon'
import { ColorPicker } from '../../../../color-picker/ColorPicker'

import './ProfileIcon.css'

export const ProfileIcon = ({ icon, onColorChange, color = '#325d97' }) => {
    const [showColorPicker, setShowColorPicker] = useState(false)

    const onColorChoose = (color) => {
        onColorChange(color)
        toggleColorPicker()
    }

    const toggleColorPicker = () => setShowColorPicker(!showColorPicker)

    return (
        <div className="SettingProfileIconWrapper">
            <ColorPicker visible={ showColorPicker } onColorChoose={ onColorChoose } defaultColor={color}/>
            <FontAwesomeIcon icon={ findProfileIcon(icon) }
                             size={ smallIconSize }
                             className="SettingProfileIcon"
                             onClick={ toggleColorPicker }
                             style={ {
                                 'color': color,
                             } }
            />
        </div>
    )
}
