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

        // Create a deep copy of the profiles array
        const copyProfiles = JSON.parse(JSON.stringify(profiles))


        // Update the profile at the specific index
        copyProfiles[index] = profile


        // Update the state with the new profiles array
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
