import React from 'react'

import { insertAfter, insertBefore, obtainNearestParentForClassName } from '../../../utility/native-dom/nativeDomUtility'

import { useProfiles, useSetProfiles } from '../../../data/provider/jotai-provider'
import { SettingProfile } from './setting-profile/SettingProfile'

import './SettingProfiles.css'

// todo: need to review this 'drag'
const placeholder = document.createElement('div')
placeholder.className = 'placeholder'
placeholder.innerHTML = 'Move here...'

export const SettingProfiles = () => {
    const profiles = useProfiles()
    const setProfiles = useSetProfiles()

    console.log('profiles -> ', JSON.stringify(profiles))

    // todo: need to investigate dragging
    // const dragStart = (e) => {
    //     this.draggedSettingProfile = e.currentTarget
    //     this.draggedSettingProfile.ordinal = this.props.profiles.filter(profile => profile.id === e.currentTarget.id)[0].ordinal
    //     e.dataTransfer.effectAllowed = 'move'
    // }
    //
    // const dragEnd = (e) => {
    //     this.draggedSettingProfile.style.display = 'block'
    //
    //     const placeholderExists = this.draggedSettingProfile.parentNode.contains(placeholder)
    //     placeholderExists && this.draggedSettingProfile.parentNode.removeChild(placeholder)
    //
    //     if (this.draggedOverSettingProfile === undefined || this.draggedOverSettingProfile === null) return
    //     this.props.onProfileReorder(this.draggedSettingProfile.id, this.draggedOverSettingProfile.id)
    // }
    //
    // const dragOver = (e) => {
    //     e.preventDefault()
    //
    //     if (!this.draggedSettingProfile) return
    //     this.draggedSettingProfile.style.display = 'none'
    //
    //     if (e.target.className === 'placeholder') return
    //
    //     const draggedOverSettingProfile = obtainNearestParentForClassName(e.target, 'SettingProfile')
    //     if (draggedOverSettingProfile === null || draggedOverSettingProfile.id === this.draggedSettingProfile.id) return
    //
    //     const draggedOverId = draggedOverSettingProfile.id
    //     const draggedOverOrdinal = this.props.profiles.filter(profile => profile.id === draggedOverId)[0].ordinal
    //     this.draggedOverSettingProfile = {id: draggedOverId, ordinal: draggedOverOrdinal}
    //
    //     if (this.draggedSettingProfile.ordinal < this.draggedOverSettingProfile.ordinal) {
    //         insertAfter(draggedOverSettingProfile, placeholder)
    //     } else {
    //         insertBefore(draggedOverSettingProfile, placeholder)
    //     }
    // }

    const onProfileCreate = (profile) => {
        setProfiles([...profiles, profile])
    }

    const onProfileDelete = (id) => {
        const profilesWithoutDeleted = profiles.filter(profile => profile.id !== id)
        setProfiles(profilesWithoutDeleted)
    }

    const onProfileUpdate = (profile) => {
        const index = profiles.findIndex((p) => p.id === profile.id)
        const copyProfiles = [...profiles]
        copyProfiles[index] = { profile }
        setProfiles(copyProfiles)
    }

    return (
        /*<div className="SettingsProfilesContainer" onDragOver={dragOver.bind(this)}>*/

        <div className="SettingsProfilesContainer">
            {profiles.map(profile => (
                <SettingProfile
                    key={profile.id}
                    id={profile.id}
                    profile={profile}
                    onProfileUpdate={onProfileUpdate}
                    onProfileRemove={() => onProfileDelete(profile.id)}
                    // dragStart={dragStart}
                    // dragEnd={dragEnd}
                />
            ))}

            {/*<SettingProfile addHandler={this.props.onProfileAdd} primaryInput noDragHandle/>*/}
            <SettingProfile onProfileCreate={onProfileCreate} primaryInput/>

        </div>
    )
}
