import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './ProfileHandle.css'

export const ProfileHandle = (props) => {

    const profileHandleElement = (!props.showHandle) ? <div className="NoHandlePlaceHolder"></div> : <button><FontAwesomeIcon icon={ faBars }/></button>

    return (
        <div className="ProfileHandle">
            { profileHandleElement }
        </div>
    )
}
