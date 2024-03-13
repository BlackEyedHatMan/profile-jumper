import React, { Component } from 'react'

import { checkValidity } from '../../../utility/inputValidation'

import './ProfileUrl.css'

export const PROFILE_URL = 'profileUrl'

export const ProfileUrl = ({register, errors}) => {
    const inputStyle = (errors[PROFILE_URL]) ? 'error' : null
    const errorShow = (errors[PROFILE_URL]) ? <p className='error'>{errors[PROFILE_URL]?.message}</p> : null

    // checkInputValidity = (updatedValue) => {
    //   const profileUrlInput = this.state.profileUrlInput
    //
    //   if(updatedValue) profileUrlInput.value = updatedValue
    //
    //   profileUrlInput.valid = checkValidity(profileUrlInput.value, profileUrlInput.validation)
    //   profileUrlInput.error = (!profileUrlInput.valid && profileUrlInput.touched)
    //
    //   const formIsValid = profileUrlInput.valid
    //
    //   if(formIsValid) {
    //     this.props.updateValue(profileUrlInput.value, formIsValid)
    //   }
    // }

    return (
        <div className="ProfileUrl">
            {errorShow}
            <input type="text"
                   name="profileUrl"
                   placeholder="Link e.g. https://instagram.com/mrupgradable"
                   autoComplete="off"
                   className={inputStyle}
                   {...register(PROFILE_URL, {
                       required: 'Enter or paste link URL e.g. https://instagram.com/mrupgradable',
                       minLength: {value: 5, message: 'URL Link is too short, enter or paste it here'}
                   })}
            />
        </div>
    )
}
