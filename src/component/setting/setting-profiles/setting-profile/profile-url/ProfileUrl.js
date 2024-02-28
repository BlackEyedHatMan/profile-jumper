import React, { Component } from 'react'

import { checkValidity } from '../../../utility/inputValidation'

import './ProfileUrl.css'

class ProfileUrl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      profileUrlInput: {
        value: props.value || '',
        validation: {
            required: true,
            minLength: 5,
            isUrl: true
        },
        valid: false,
        error: false
      },
      isValid: false
    }

    this.onChangedHandler = this.onChangedHandler.bind(this)
  }

  checkInputValidity = (updatedValue) => {
    const profileUrlInput = this.state.profileUrlInput

    if(updatedValue) profileUrlInput.value = updatedValue

    profileUrlInput.valid = checkValidity(profileUrlInput.value, profileUrlInput.validation)
    profileUrlInput.error = (!profileUrlInput.valid && profileUrlInput.touched)

    const formIsValid = profileUrlInput.valid

    if(formIsValid) {
      this.props.updateValue(profileUrlInput.value, formIsValid)
    }
  }

  onChangedHandler(event) {
    //todo: refactor UPDATE
    const value = event.target.value
    const profileUrlInput = {...this.state.profileUrlInput}
    profileUrlInput.value = value
    this.setState({...this.state, profileUrlInput: profileUrlInput})
    this.checkInputValidity(value)
  }

  render() {
    const profileUrlInput = this.state.profileUrlInput

    return (
      <div className="ProfileUrl">
        <input type="text" name="profileUrl" value={profileUrlInput.value} onChange={this.onChangedHandler}  placeholder="URL e.g. https://instagram.com/mrupgradable" {...( this.props.updateExisting && {onBlur: this.props.updateExisting} )} autoComplete="off"/>
      </div>
    );
  }
}

export default ProfileUrl
