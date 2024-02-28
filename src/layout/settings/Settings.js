import React, { Component } from 'react'

import SettingHeader from '../../component/setting/setting-header/SettingHeader'
import SettingProfiles from '../../component/setting/setting-profiles/SettingProfiles'
import SettingFooter from '../../component/setting/setting-footer/SettingFooter'

import Profiles from '../../component/profiles/Profiles'

import SettingsDataImport from '../../component/data/import/SettingsDataImport'
import SettingsDataExport from '../../component/data/export/SettingsDataExport'

import './Settings.css'

class Settings extends Component {

  render() {
    return (
      <div className="Settings">

        <SettingHeader/>

        <div className="SettingsConfig">
          <div className="ProfilesPannelWapper">
            <div className="ProfilesPannel">
              <Profiles/>
            </div>
            <div className="SettingsDataPanel">
              <SettingsDataImport/>
              <SettingsDataExport/>
            </div>
          </div>
          <div className="SettingsPannel">
            <SettingProfiles/>
          </div>
        </div>

        <SettingFooter/>

      </div>
    )
  }
}

export default Settings
