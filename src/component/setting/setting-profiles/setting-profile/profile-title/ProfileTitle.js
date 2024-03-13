import React, { Component } from 'react'

import { checkValidity } from '../../../utility/inputValidation'

import './ProfileTitle.css'

class ProfileTitle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      profileTitleInput: {
        value: props.value || '',
        validation: {
            required: true,
            minLength: 2,
        },
        valid: false,
        error: false
      },
      isValid: false
    }

    this.onChangedHandler = this.onChangedHandler.bind(this)
  }

  checkInputValidity = (updatedValue) => {
    const profileTitleInput = this.state.profileTitleInput

    if(updatedValue) profileTitleInput.value = updatedValue

    profileTitleInput.valid = checkValidity(profileTitleInput.value, profileTitleInput.validation)
    profileTitleInput.error = (!profileTitleInput.valid && profileTitleInput.touched)

    const formIsValid = profileTitleInput.valid

    if(formIsValid) {
      this.props.updateValue(profileTitleInput.value, formIsValid)
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.value !== prevProps.value) {
      //todo: refactor UPDATE
      const profileTitleInput = this.state.profileTitleInput
      profileTitleInput.value = this.props.value
      this.setState({...this.state, profileTitleInput: profileTitleInput})
    }
  }

  onChangedHandler(event) {
    //todo: refactor UPDATE
    const value = event.target.value
    const profileTitleInput = {...this.state.profileTitleInput}
    profileTitleInput.value = value
    this.setState({...this.state, profileTitleInput: profileTitleInput})
    this.checkInputValidity(value)
  }

  render() {
    const profileTitleInput = this.state.profileTitleInput

    return (
      <div className="ProfileTitle">
        <input type="text" name="profileTitle" value={profileTitleInput.value} onChange={this.onChangedHandler} {...( this.props.updateExisting && {onBlur: this.props.updateExisting} )} autoComplete="off" />
      </div>
    )
  }

}

export default ProfileTitle
