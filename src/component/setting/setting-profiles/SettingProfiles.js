import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as profileActions from '../../../store/profile/action'
import SettingProfile from './setting-profile/SettingProfile'
import { insertBefore, insertAfter, obtainNearestParentForClassName } from '../../../utility/native-dom/nativeDomUtility'

import './SettingProfiles.css'

const placeholder = document.createElement('div')
placeholder.className = 'placeholder'
placeholder.innerHTML = 'Move here...'

class SettingProfiles extends Component {

  componentDidMount() {
    this.props.onInitProfiles()
  }

  dragStart = (e) => {
    this.draggedSettingProfile = e.currentTarget
    this.draggedSettingProfile.ordinal = this.props.profiles.filter(profile => profile.id === e.currentTarget.id)[0].ordinal
    e.dataTransfer.effectAllowed = 'move'
  }

  dragEnd = (e) => {
    this.draggedSettingProfile.style.display = 'block'

    const placeholderEsists = this.draggedSettingProfile.parentNode.contains(placeholder)
    placeholderEsists && this.draggedSettingProfile.parentNode.removeChild(placeholder)

    if(this.draggedOverSettingProfile === undefined || this.draggedOverSettingProfile === null) return
    this.props.onProfileReorder(this.draggedSettingProfile.id, this.draggedOverSettingProfile.id)
  }

  dragOver = (e) => {
    e.preventDefault()

    if(!this.draggedSettingProfile) return
    this.draggedSettingProfile.style.display = 'none'

    if(e.target.className === 'placeholder') return

    const draggedOverSettingProfile = obtainNearestParentForClassName(e.target, 'SettingProfile')
    if(draggedOverSettingProfile === null || draggedOverSettingProfile.id === this.draggedSettingProfile.id) return

    const draggedOverId = draggedOverSettingProfile.id
    const draggedOverOrdinal = this.props.profiles.filter(profile => profile.id === draggedOverId)[0].ordinal
    this.draggedOverSettingProfile = {id: draggedOverId, ordinal: draggedOverOrdinal}

    if(this.draggedSettingProfile.ordinal < this.draggedOverSettingProfile.ordinal) {
      insertAfter(draggedOverSettingProfile, placeholder)
    } else {
      insertBefore(draggedOverSettingProfile, placeholder)
    }
  }

  render() {
      const settingProfiles = this.props.profiles

      return(
          <div className="SettingsProfilesContainer" onDragOver={this.dragOver.bind(this)}>
            {settingProfiles.map(settingProfile => (
              <SettingProfile
                key={settingProfile.id}
                id={settingProfile.id}
                url={settingProfile.url}
                title={settingProfile.title}
                icon={settingProfile.icon}
                updateHandler={this.props.onProfileUpdate}
                removeHandler={() => this.props.onProfileRemove(settingProfile.id)}
                dragStart={this.dragStart}
                dragEnd={this.dragEnd}
              />
            ))}
            <SettingProfile addHandler={this.props.onProfileAdd} primaryInput noDragHandle />
          </div>
      )
  }
}


const mapStateToProps = centralStoreState => {
    return { profiles: centralStoreState.profileStore.profiles }
}

const mapDispatcherToProps = (dispatch) => {
    return {
      onInitProfiles: () => dispatch( profileActions.retrieveFromPersistentProfilesAction() ),
      onProfileAdd: (profile) => dispatch( profileActions.createProfileAndPersistAction(profile) ),
      onProfileUpdate: (profile) => dispatch( profileActions.updateProfileAndPersistAction(profile) ),
      onProfileRemove: (id) => dispatch( profileActions.deleteProfileAndPersistAction(id) ),
      onProfileReorder: (id, beforeId) => dispatch( profileActions.reOrderProfileAndPersistAction(id, beforeId) )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(SettingProfiles)
