import React from 'react'

import './ProfileRemove.css'

export const ProfileRemove = ({ onRemove }) => (
    <div className='ProfileRemove'>
        <input type='button' value='-' onClick={ onRemove }/>
    </div>
)
