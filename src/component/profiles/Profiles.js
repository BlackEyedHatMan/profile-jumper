import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SolidIcon from '@fortawesome/free-solid-svg-icons'

import * as profileActions from '../../store/profile/action'
import { sortProfilesById } from '../../utility/profile/profileUtility'

import Profile from './profile/Profile'

import './Profiles.css'

class Profiles extends Component {

  componentDidMount() {
    this.props.onInitProfiles()
  }

  render() {
    const profiles = this.props.profiles

    let profilesListed = (
      <div className="NoProfiles">
        <h1>Setup Profiles</h1>
        <p>Click on the gears icon to add some profiles...</p>

        <div className="ConfigureInfo">
          <a className="ConfigureClick" href="#settings" target="_blank" rel="noopener noreferrer" title="Click here to configure - Profile Jumper!"><FontAwesomeIcon icon={SolidIcon.faCogs} size="4x" /></a>
        </div>
      </div>
    )

    if(profiles && profiles.length > 0) {
      profilesListed = (
        <div className="Profiles">
          {profiles.sort(sortProfilesById).map(profile => (
              <Profile key={profile.id} id={profile.id} icon={profile.icon} url={profile.url}  />
          ))}
        </div>
      )
    }

    return (
      profilesListed
    )
  }
}

const mapStateToProps = centralStoreState => {
    return { profiles: centralStoreState.profileStore.profiles }
}

const mapDispatcherToProps = (dispatch) => {
    return {
        onInitProfiles: () => dispatch( profileActions.retrieveFromPersistentProfilesAction() )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Profiles)
