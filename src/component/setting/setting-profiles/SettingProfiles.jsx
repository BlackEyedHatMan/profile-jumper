import React from 'react'

import { SettingProfile } from './setting-profile/SettingProfile'
import { insertAfter, insertBefore, obtainNearestParentForClassName } from '../../../utility/native-dom/nativeDomUtility'
import { useProfiles, useSetProfiles } from '../../../data/provider/jotai-provider'

import './SettingProfiles.css'

// todo: need to review this 'drag'
const placeholder = document.createElement('div')
placeholder.className = 'placeholder'
placeholder.innerHTML = 'Move here...'

export const SettingProfiles = () => {
    const profiles = useProfiles()
    const setProfiles = useSetProfiles()

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

    return (
        /*<div className="SettingsProfilesContainer" onDragOver={dragOver.bind(this)}>*/

        <div className="SettingsProfilesContainer">
            {/*{settingProfiles.map(settingProfile => (*/}
            {/*    <SettingProfile*/}
            {/*        key={settingProfile.id}*/}
            {/*        id={settingProfile.id}*/}
            {/*        url={settingProfile.url}*/}
            {/*        title={settingProfile.title}*/}
            {/*        icon={settingProfile.icon}*/}
            {/*        updateHandler={this.props.onProfileUpdate}*/}
            {/*        removeHandler={() => this.props.onProfileRemove(settingProfile.id)}*/}
            {/*        dragStart={dragStart}*/}
            {/*        dragEnd={dragEnd}*/}
            {/*    />*/}
            {/*))}*/}
            {/*<SettingProfile addHandler={this.props.onProfileAdd} primaryInput noDragHandle/>*/}

            <SettingProfile onProfileCreate={onProfileCreate} primaryInput/>

        </div>
    )
}

// todo: double check
// const mapDispatcherToProps = (dispatch) => {
//     return {
//         onInitProfiles: () => dispatch(profileActions.retrieveFromPersistentProfilesAction()),
//         onProfileAdd: (profile) => dispatch(profileActions.createProfileAndPersistAction(profile)),
//         onProfileUpdate: (profile) => dispatch(profileActions.updateProfileAndPersistAction(profile)),
//         onProfileRemove: (id) => dispatch(profileActions.deleteProfileAndPersistAction(id)),
//         onProfileReorder: (id, beforeId) => dispatch(profileActions.reOrderProfileAndPersistAction(id, beforeId))
//     }
// }
