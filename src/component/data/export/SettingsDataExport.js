import React from 'react'

import { useProfiles } from '../../../data/provider/jotai-provider'
import { DisplayIcon } from '../../icon/DisplayIcon'

import './SettingsDataExport.css'

export const SettingsDataExport = () => {
    const profiles = useProfiles()

    const DOWNLOAD_FILE_MIME_TYPE = 'application/json'
    const DOWNLOAD_FILE = 'profile-jumper-settings.json'

    const saveDataFileToClient = () => {
        const cleanedSettingProfileData = cleanOutputFileData(profiles)

        const fileData = JSON.stringify(cleanedSettingProfileData)
        const blob = new Blob([fileData], { type: DOWNLOAD_FILE_MIME_TYPE })

        const url = URL.createObjectURL(blob)
        createDownloadLink(url)
    }

    const createDownloadLink = (url) => {
        const link = document.createElement('a')
        link.download = DOWNLOAD_FILE
        link.href = url
        link.click()
    }

    const cleanOutputFileData = (profiles) => {
        return (profiles || []).map(profile => {
            if (!profile) return {};
            const exportProfile = {...profile};
            delete exportProfile.id; // remove id
            return exportProfile;
        });
    }

    const enableDisableExport = (!profiles || profiles.length > 0) ? {} : { disabled: "disabled" }

    return (
        <div className="SettingsDataExport">
            <button onClick={ saveDataFileToClient } { ...enableDisableExport } title="Click here to export your profiles to a file">
                <DisplayIcon icon="FaFileDownload"/>
            </button>
        </div>
    )
}
