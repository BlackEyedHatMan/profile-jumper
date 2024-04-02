import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import { findProfileIconKeyForTitle } from '../../../utility/profile/profile-icon-utility'
import { generateUniqueId } from '../../../utility/identifier/id-utility'

import { useSetProfiles } from '../../../data/provider/jotai-provider'
import { DEFAULT_ICON_COLOUR } from '../../../config/constants'

import './SettingsDataImport.css'

export const SettingsDataImport = () => {
    const setProfiles = useSetProfiles()

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
        const profilesFromData = []

        profileSettingsData.forEach((settingProfileData) => {
            const profile = mapDataToProfile(settingProfileData)
            profilesFromData.push(profile)
        })

        setProfiles(profilesFromData)
    }

    const mapDataToProfile = (data) => {
        const id = data.id || generateUniqueId()
        const icon = data.icon || findProfileIconKeyForTitle(data.title)
        const iconColor = data.iconColor || DEFAULT_ICON_COLOUR
        return { id: id, url: data.url, title: data.title, icon: icon, iconColor: iconColor }
    }

    return (
        <div className="SettingsDataImport">
            <label title="Click here to import profiles from a file">
                <FontAwesomeIcon icon={ faFileUpload }/>
                <input type="file" name="settingData" onChange={ handleFileDataImport }/>
            </label>
        </div>
    )
}
