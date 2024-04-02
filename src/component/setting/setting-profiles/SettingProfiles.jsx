import React from 'react'

import { useProfiles, useSetProfiles } from '../../../data/provider/jotai-provider'
import { OrderedSettingProfiles } from './ordered-setting-profiles/OrderedSettingProfiles'
import { SettingProfile } from './setting-profile/SettingProfile'

import './SettingProfiles.css'

export const SettingProfiles = () => {
    const profiles = useProfiles()
    const setProfiles = useSetProfiles()

    const onProfileCreate = (profile) => {
        setProfiles([...profiles, profile])
    }

    const onProfileUpdate = (profile) => {
        const index = profiles.findIndex((p) => p.id === profile.id)
        const copyProfiles = [...profiles]
        copyProfiles[index] = profile
        setProfiles(copyProfiles)
    }

    const onProfileDelete = (id) => {
        const profilesWithoutDeleted = profiles.filter(profile => profile.id !== id)
        setProfiles(profilesWithoutDeleted)
    }

    return (
        <div className="SettingsProfilesContainer">
            <OrderedSettingProfiles onProfileUpdate={ onProfileUpdate } onProfileDelete={ onProfileDelete }/>
            <SettingProfile onProfileCreate={ onProfileCreate } primaryInput/>
        </div>
    )
}
