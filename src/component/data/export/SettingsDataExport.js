import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import * as profileActions from '../../../store/profile/action'

import './SettingsDataExport.css'

class SettingsDataExport extends Component {

  componentDidMount() {
    //legacy
    //this.props.onInitProfiles()
  }

  saveDataFileToClient = () => {
    const settingProfileData = this.props.profiles
    const cleanedSettingProfileData = this.cleanOutputFileData(settingProfileData)

    const fileData = JSON.stringify(cleanedSettingProfileData)
    const blob = new Blob([fileData], {type: 'text/plain'})

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = 'profile-jumper-settings.json'
    link.href = url
    link.click()
  }

  cleanOutputFileData = (profiles) => {
    return profiles.map(profile => { return {url: profile.url, title: profile.title }} )
  }

  render() {
    const profiles = this.props.profiles
    const enableDisableExport = (!profiles || profiles.length > 0) ? {} : {disabled: "disabled"}

    return (
      <div className="SettingsDataExport">
        <button onClick={this.saveDataFileToClient} {...enableDisableExport} title="Click here to export profile settings to a file"><FontAwesomeIcon icon={faFileDownload}/></button>
      </div>
    )
  }
}


const mapStateToProps = centralStoreState => {
    return { profiles: centralStoreState.profileStore.profiles }
}

const mapDispatcherToProps = (dispatch) => {
    return {
      onInitProfiles: () => dispatch( profileActions.retrieveFromPersistentProfilesAction() )
    }
}

export default SettingsDataExport
