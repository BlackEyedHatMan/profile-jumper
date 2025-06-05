import React from 'react'

import { useProfiles } from '../../data/provider/jotai-provider'
import { Profile } from './profile/Profile'
import { DisplayIcon } from '../icon/DisplayIcon'

import './Profiles.css'

export const Profiles = () => {
    const profiles = useProfiles()

    let profilesListed = (
        <div className="NoProfiles">
            <h1>Setup Your Profile Links</h1>
            <p>Click the "gears" icon below to add your profiles links...</p>

            <div className="ConfigureInfo">
                <a className="ConfigureClick" href="#settings" target="_blank" rel="noopener noreferrer" title="Click here to update your profile links - Profile Jumper!">
                    <DisplayIcon icon="FaCogs"/>
                </a>
            </div>
        </div>
    )

    if (profiles && profiles.length > 0) {
        profilesListed = (
            <div className="Profiles">
                { (profiles || []).map(profile => (
                    <Profile key={ profile.id } id={ profile.id } profile={ profile }/>
                )) }
            </div>
        )
    }

    return (
        profilesListed
    )
}
