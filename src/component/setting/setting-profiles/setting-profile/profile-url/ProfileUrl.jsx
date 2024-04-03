import React from 'react'

import './ProfileUrl.css'

export const PROFILE_URL = 'profileUrl'

export const ProfileUrl = ({ register, errors }) => {
    const inputStyle = (errors[PROFILE_URL]) ? 'error' : null
    const errorShow = (errors[PROFILE_URL]) ? <p className='error'>{ errors[PROFILE_URL]?.message }</p> : null

    return (
        <div className="ProfileUrl">
            { errorShow }
            <input type="text"
                   placeholder="Link e.g. https://instagram.com/mrupgradable"
                   autoComplete="off"
                   className={ inputStyle }
                   { ...register(PROFILE_URL, {
                       required: 'Enter or paste link URL e.g. https://instagram.com/mrupgradable',
                       minLength: { value: 5, message: 'URL link is too short, enter or paste it here' },
                       pattern: {
                           value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,10}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi,
                           message: 'Link is incorrect, must be valid URL e.g. https://x.com/mr_upgradable'
                       }
                   }) }
            />
        </div>
    )
}
