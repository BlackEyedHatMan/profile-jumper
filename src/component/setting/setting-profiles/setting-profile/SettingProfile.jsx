import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { PROFILE_URL, ProfileUrl } from './profile-url/ProfileUrl'
import { PROFILE_TITLE, ProfileTitle } from './profile-title/ProfileTitle'
import { SettingProfileIcon } from './profile-icon/SettingProfileIcon'
import { ProfileAdd } from './profile-add/ProfileAdd'
import { ProfileRemove } from './profile-remove/ProfileRemove'
import { isEntityEmpty } from '../../../../utility/entity/entity-utility'
import { mapProfileToData, mapValuesToProfile, resetProfileData } from '../../../../data/mapper/profile-data-mapper'
import { ProfileHandle } from './profile-handle/ProfileHandle'
import { findIconNameForUrl, findIconNameTitle } from '../../../../utility/icon/icon-lib-utility'

import './SettingProfile.css'

export const SettingProfile = ({ profile, onProfileCreate, onProfileRemove, onProfileUpdate, primaryInput }) => {
    const [editProfileData, setEditProfileData] = useState(mapProfileToData(profile))
    const [updated, setUpdated] = useState(false)

    const { register, watch, reset, formState: { errors }, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: mapProfileToData(profile)
    })

    useEffect(() => {
        const subscription = watch((formValue, { name }) => {
            const inputValue = (formValue && formValue[name]) ? formValue[name] : ''
            if (name === PROFILE_URL) {
                const profileIconForUrl = findIconNameForUrl(inputValue)
                setEditProfileData({ ...editProfileData, profileUrl: inputValue, profileIcon: profileIconForUrl })
                setUpdated(true)
            }
            if (name === PROFILE_TITLE) {
                const profileIconForTitle = findIconNameTitle(inputValue)
                setEditProfileData({ ...editProfileData, profileTitle: inputValue, profileIcon: profileIconForTitle })
                setUpdated(true)
            }
        })
        return () => subscription.unsubscribe()
    }, [watch])

    useEffect(() => {
        // no update handler (means should not update)
        if (onProfileUpdate && updated) {
            const updateTimer = setTimeout(() => {
                onProfileUpdate(mapValuesToProfile(editProfileData))
                setUpdated(false)
            }, 2000)
            return () => {
                clearTimeout(updateTimer)
            }
        }
    }, [updated]);


    // will be valid 1st time round (onProfileAddHandler -> handleSubmit will re-validate)
    const isValid = isEntityEmpty(errors)

    const onProfileAddHandler = (event) => {
        handleSubmit(onSubmit)(event)
    }

    const onSubmit = async (data) => {
        let profile = mapValuesToProfile({ ...data, profileIcon: editProfileData.profileIcon, profileIconColor: editProfileData.profileIconColor })
        onProfileCreate?.(profile)
        resetForm()
    }

    const resetForm = () => {
        setEditProfileData(resetProfileData())
        reset(resetProfileData())
    }

    const onIconColorChange = (color) => {
        setEditProfileData(epd => {
            const updatedProfileData = { ...epd, profileIconColor: color }
            onProfileUpdate?.(mapValuesToProfile(updatedProfileData))
            return updatedProfileData
        })
    }

    let className = 'SettingProfile'
    if (primaryInput) className += ' PrimaryInput'
    if (onProfileUpdate && updated) className += ' Updating'

    return (
        <div className={ className }>
            { !primaryInput && <ProfileHandle/> }

            <ProfileUrl register={ register } errors={ errors }/>
            <ProfileTitle register={ register } errors={ errors }/>
            <SettingProfileIcon iconName={ editProfileData.profileIcon } onColorChange={ onIconColorChange } color={ editProfileData?.profileIconColor }/>

            { onProfileCreate && <ProfileAdd onCreate={ onProfileAddHandler } enabled={ isValid }/> }
            { onProfileRemove && <ProfileRemove onRemove={ onProfileRemove }/> }
        </div>
    )
}
