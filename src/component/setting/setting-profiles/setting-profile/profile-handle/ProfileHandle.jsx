import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './ProfileHandle.css'

export const ProfileHandle = () => (
    <div className="ProfileHandle">
        <button><FontAwesomeIcon icon={ faBars }/></button>
    </div>
)

