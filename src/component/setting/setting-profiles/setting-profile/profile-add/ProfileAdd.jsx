import React from 'react'

import './ProfileAdd.css'

export const ProfileAdd = ({ onCreate, enabled }) => {
    const isDisabled = (!enabled) ? 'disabled' : ''

    return (
        <div className='ProfileAdd'>
            <input type='button' value='+' onClick={ (e) => onCreate(e) } disabled={ isDisabled }/>
        </div>
    )
}
