import React, { Component } from 'react'

import ProfileHandle from './profile-handle/ProfileHandle'
import ProfileUrl from './profile-url/ProfileUrl'
import ProfileTitle from './profile-title/ProfileTitle'
import ProfileIcon from './profile-icon/ProfileIcon'
import ProfileAdd from './profile-add/ProfileAdd'
import ProfileRemove from './profile-remove/ProfileRemove'
import * as profileUtility from '../../../../utility/profile/profileUtility'

import './SettingProfile.css'

class SettingProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: props.id || 0,
      valid: false,
      inputs: {
        profileUrl: {
          value: props.url || '',
          isValid: false
        },
        profileTitle: {
          value: props.title || '',
          isValid: false
        },
        profileIcon: {
          value: props.icon || ''
        }
      }
    }
  }

  //refactor this
  resetState = () => {
    this.setState((state) => {
      return {
        id: 0,
        valid: false,
        inputs: {
          profileUrl: {
            value: '',
            isValid: false
          },
          profileTitle: {
            value: '',
            isValid: false
          },
          profileIcon: {
            value: ''
          }
        }
      }
    })
  }

  //todo: refactor this!
  updateInput = (inputRef, value, valid) => {
    let inputs = {...this.state.inputs}

    const effectedInput = inputs[inputRef]
    effectedInput.value = value
    effectedInput.isValid = valid

    inputs[inputRef] = effectedInput

    if(inputRef === 'profileUrl') {
        const profileUrl = this.state.inputs['profileUrl']

        //todo: refactor all of this
        if(profileUrl.isValid) {
          const title = profileUtility.profileTitleFromUrl(profileUrl.value)

          if(title) {
            const iconKey = profileUtility.profileKeyFromValue(title)

            //todo: refactor use updateObject
            const profileIcon = inputs['profileIcon']
            profileIcon.value = iconKey
            inputs['profileIcon'] = profileIcon

            const profileTitle = inputs['profileTitle']
            profileTitle.value = title
            inputs['profileTitle'] = profileTitle
          }
        } else {
          const profileIcon = inputs['profileIcon']
          profileIcon.value = ''
          inputs['profileIcon'] = profileIcon

          const profileTitle = inputs['profileTitle']
          profileTitle.value = ''
          inputs['profileTitle'] = profileTitle
        }
    }

    if(inputRef === 'profileTitle') {
      const profileTitle = this.state.inputs['profileTitle']

      if(profileTitle.isValid) {
        const iconKey = profileUtility.profileKeyFromValue(profileTitle.value)

        const profileIcon = inputs['profileIcon']
        profileIcon.value = iconKey
        inputs['profileIcon'] = profileIcon
      }
    }

    const areAllValid = this.isAllInputValid()

    this.setState({...this.state, inputs: inputs, valid: areAllValid})
  }

  isAllInputValid = () => {
    const inputs = this.state.inputs
    return inputs['profileUrl'].isValid || inputs['profileTitle'].isValid
  }

  profileAddHandler = () => {
    const profile = this.mapValuesProfile()
    this.props.addHandler(profile)
    this.resetState()
  }

  profileUpdateHandler = () => {
    const valid = this.state.valid
    if(valid) {
      const profile = this.mapValuesProfile()
      this.props.updateHandler(profile)
    }
  }

  mapValuesProfile = () => {
    const id = this.state.id
    const { profileUrl, profileTitle, profileIcon } = this.state.inputs
    return {id: id, url: profileUrl.value, title: profileTitle.value, icon: profileIcon.value}
  }

  render() {
    const valid = this.state.valid
    const { profileUrl, profileTitle, profileIcon } = this.state.inputs

    const idProperties = (this.props.primaryInput) ? {} : {id: this.props.id}

    let className = 'SettingProfile'
    if (this.props.primaryInput) className += ' PrimaryInput'

    const draggableOptions = (this.props.noDragHandle) ? {} : {draggable: true, onDragStart: this.props.dragStart, onDragEnd: this.props.dragEnd}
    const profileAddButton = (this.props.addHandler) ? <ProfileAdd handleAdd={this.profileAddHandler} enabled={valid}/> : null
    const profileRemoveButton = (this.props.removeHandler) ? <ProfileRemove handleRemove={this.props.removeHandler}/> : null

    return (
          <div {...idProperties} className={className} {...draggableOptions}>
            <ProfileHandle showHandle={!this.props.noDragHandle}/>
            <ProfileUrl updateValue={(value, validity) => this.updateInput('profileUrl', value, validity)} value={profileUrl.value} { ...(this.props.updateHandler && {updateExisting: this.profileUpdateHandler}) } />
            <ProfileTitle updateValue={(value, validity) => this.updateInput('profileTitle', value, validity)} value={profileTitle.value} { ...(this.props.updateHandler && {updateExisting: this.profileUpdateHandler}) }/>
            <ProfileIcon icon={profileIcon.value}/>
            {profileAddButton}
            {profileRemoveButton}
          </div>
    )
  }
}

export default SettingProfile
