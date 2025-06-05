import React from 'react'

import { SettingHeader } from '../../component/setting/setting-header/SettingHeader'
import { SettingProfiles } from '../../component/setting/setting-profiles/SettingProfiles'
import { SettingFooter } from '../../component/setting/setting-footer/SettingFooter'

import { Profiles } from '../../component/profiles/Profiles'

import { SettingsDataImport } from '../../component/data/import/SettingsDataImport'
import { SettingsDataExport } from '../../component/data/export/SettingsDataExport'
import ErrorBoundary from '../../components/ErrorBoundary'

import './Settings.css'

export const Settings = () => {

    return (
        <div className="Settings">

            <SettingHeader/>

            <div className="SettingsConfig">
                <div className="ProfilesPannelWapper">
                    <div className="ProfilesPannel">
                        <ErrorBoundary>
                            <Profiles/>
                        </ErrorBoundary>
                    </div>
                    <p>Your profile links will look like the above.</p>
                    <div className="SettingsDataPanel">
                        <ErrorBoundary>
                            <SettingsDataImport/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SettingsDataExport/>
                        </ErrorBoundary>
                    </div>
                </div>
                <div className="SettingsPannel">
                    <ErrorBoundary>
                        <SettingProfiles/>
                    </ErrorBoundary>
                </div>
            </div>

            <SettingFooter/>

        </div>
    )
}
