import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import * as profileActions from '../../../store/profile/action'
import * as profileUtility from '../../../utility/profile/profileUtility'
import { generateUniqueId } from '../../../utility/identifier/identifierUtility'

import './SettingsDataImport.css'

class SettingsDataImport extends Component {

  handleFileDataImport = (e) => {
    const files = e.target.files || e.dataTransfer.files
    const file = files[0]

    //don't upload file when user cancels operation
    if(file === undefined || file === null) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const jsonProfileSettingsData = JSON.parse(e.target.result)
      this.processData(jsonProfileSettingsData)
    }
    reader.readAsText(file)
  }

  processData = (profileSettingsData) => {
    this.props.onDeleteAllProfiles()

    profileSettingsData.forEach((settingProfileData) => {
      const profile = this.mapDataToProfile(settingProfileData)
      this.props.onProfileAdd(profile)
    })
  }

  mapDataToProfile = (data) => {
    const profileId = generateUniqueId()
    const profileIcon = profileUtility.profileKeyFromValue(data.title)
    return {id: profileId, url: data.url, title: data.title, icon:profileIcon}
  }

  render() {
    return (
      <div className="SettingsDataImport">
        <label title="Click here to import profile settings from a file">
          <FontAwesomeIcon icon={faFileUpload}/>
          <input type="file" name="settingData" onChange={this.handleFileDataImport} />
        </label>
      </div>
    )
  }
}

const mapStateToProps = centralStoreState => {
    return { profiles: centralStoreState.profileStore.profiles }
}

const mapDispatcherToProps = (dispatch) => {
    return {
      onDeleteAllProfiles: () => dispatch( profileActions.deleteAllProfilesAndPersistAction() ),
      onProfileAdd: (profile) => dispatch( profileActions.createProfileAndPersistAction(profile) )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(SettingsDataImport)
