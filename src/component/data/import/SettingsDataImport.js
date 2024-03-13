import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import * as profileActions from '../../../store/profile/action'
import * as profileIconUtility from '../../../utility/profile/profile-icon-utility'
import { generateUniqueId } from '../../../utility/identifier/identifierUtility'

import './SettingsDataImport.css'

const SettingsDataImport = () => {

    const handleFileDataImport = (e) => {
        const files = e.target.files || e.dataTransfer.files
        const file = files[0]

        //don't upload file when user cancels operation
        if (file === undefined || file === null) return

        const reader = new FileReader()
        reader.onload = (e) => {
            const jsonProfileSettingsData = JSON.parse(e.target.result)
            processData(jsonProfileSettingsData)
        }
        reader.readAsText(file)
    }

    const processData = (profileSettingsData) => {
        this.props.onDeleteAllProfiles()

        profileSettingsData.forEach((settingProfileData) => {
            const profile = mapDataToProfile(settingProfileData)
            this.props.onProfileAdd(profile)
        })
    }

    const mapDataToProfile = (data) => {
        const profileId = generateUniqueId()
        const profileIcon = profileIconUtility.findProfileIconKeyForTitle(data.title)
        return {id: profileId, url: data.url, title: data.title, icon: profileIcon}
    }

    return (
        <div className="SettingsDataImport">
            <label title="Click here to import profile settings from a file">
                <FontAwesomeIcon icon={faFileUpload}/>
                <input type="file" name="settingData" onChange={handleFileDataImport}/>
            </label>
        </div>
    )
}

const mapStateToProps = centralStoreState => {
    return {profiles: centralStoreState.profileStore.profiles}
}

const mapDispatcherToProps = (dispatch) => {
    return {
        onDeleteAllProfiles: () => dispatch(profileActions.deleteAllProfilesAndPersistAction()),
        onProfileAdd: (profile) => dispatch(profileActions.createProfileAndPersistAction(profile))
    }
}

export default SettingsDataImport
