import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SolidIcon from '@fortawesome/free-solid-svg-icons'

import { useProfiles } from '../../data/provider/jotai-provider'
import { Profile } from './profile/Profile'

import './Profiles.css'

export const Profiles = () => {
    const profiles = useProfiles()

    let profilesListed = (
        <div className="NoProfiles">
            <h1>Setup Profiles</h1>
            <p>Click on the gears icon to add some profiles...</p>

            <div className="ConfigureInfo">
                <a className="ConfigureClick" href="#settings" target="_blank" rel="noopener noreferrer" title="Click here to configure - Profile Jumper!">
                    <FontAwesomeIcon icon={ SolidIcon.faCogs } size="4x"/>
                </a>
            </div>
        </div>
    )

    if (profiles && profiles.length > 0) {
        profilesListed = (
            <div className="Profiles">
                { profiles.map(profile => (
                    <Profile key={ profile.id } id={ profile.id } icon={ profile.icon } url={ profile.url }/>
                )) }
            </div>
        )
    }

    return (
        profilesListed
    )
}
