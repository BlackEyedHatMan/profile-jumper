import React from 'react'

import './ProfileTitle.css'

export const PROFILE_TITLE = 'profileTitle'

export const ProfileTitle = ({ register, errors }) => {
    const inputStyle = (errors[PROFILE_TITLE]) ? 'error' : null
    const errorShow = (errors[PROFILE_TITLE]) ? <p className='error'>{ errors[PROFILE_TITLE]?.message }</p> : null

    return (
        <div className='ProfileTitle'>
            { errorShow }
            <input type='text'
                   placeholder="Icon name e.g. Twitter"
                   autoComplete='off'
                   className={ inputStyle }
                   { ...register(PROFILE_TITLE, {
                       required: false,
                       minLength: { value: 1, message: 'Title is too short' },
                   }) }
            />
        </div>
    )
}
