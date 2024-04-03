import React from 'react'

import { generateUniqueId } from '../../../utility/identifier/id-utility'

import { useSetProfiles } from '../../../data/provider/jotai-provider'
import { DEFAULT_ICON_COLOUR } from '../../../config/constants'
import { DisplayIcon } from '../../icon/DisplayIcon'
import { findIconNameTitle } from '../../../utility/icon/icon-lib-utility'

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
        const icon = data.icon || findIconNameTitle(data.title)
        const iconColor = data.iconColor || DEFAULT_ICON_COLOUR
        return { id: id, url: data.url, title: data.title, icon: icon, iconColor: iconColor }
    }

    return (
        <div className="SettingsDataImport">
            <label title="Click here to import profiles from a file">
                <DisplayIcon icon="FaFileUpload"/>
                <input type="file" name="settingData" onChange={ handleFileDataImport }/>
            </label>
        </div>
    )
}
