import React from 'react'

import Profiles from '../../component/profiles/Profiles'
import Branding from '../../component/branding/Branding'

import './Popup.css'

export const Popup = () => {

    return (
        <div className="Popup">
            <Profiles/>
            <Branding/>
        </div>
    )
}
