import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { PROFILE_URL, ProfileUrl } from './profile-url/ProfileUrl'
import { PROFILE_TITLE, ProfileTitle } from './profile-title/ProfileTitle'
import { ProfileIcon } from './profile-icon/ProfileIcon'
import * as profileIconUtility from '../../../../utility/profile/profile-icon-utility'
import { ProfileAdd } from './profile-add/ProfileAdd'
import { ProfileRemove } from './profile-remove/ProfileRemove'
import { isEntityEmpty } from '../../../../utility/entity/entity-utility'

import './SettingProfile.css'

export const SettingProfile = ({ onProfileCreate, onProfileRemove }) => {
    const [profileIconName, setProfileIconName] = useState('')

    // todo: inject profile or fetch from storage (think about SRP)
    const { register, watch, formState: {errors}, handleSubmit } = useForm({
        mode: 'onChange'
    })

    useEffect(() => {
        const subscription = watch((formValue, {name}) => {
            const inputValue = (formValue && formValue[name]) ? formValue[name] : ''
            if (name === PROFILE_URL) {
                const profileIconUrlHint = profileIconUtility.profileIconFromUrl(inputValue)
                setProfileIconName(profileIconUrlHint)
                // todo: should override title (perhaps have waterfall, delegated logic)
            }
            if (name === PROFILE_TITLE) {
                // todo: look into profileIconUtility.findProfileIconKeyForTitle()
                setProfileIconName(inputValue)
            }
        })
        return () => subscription.unsubscribe()
    }, [watch])


    // will be valid 1st time round (onProfileAddHandler -> handleSubmit will re-validate)
    const isValid = isEntityEmpty(errors)

    const onProfileAddHandler = (event) => {
        handleSubmit(onSubmit)(event)
    }

    const onSubmit = async (data) => {
        let profile = mapValuesToProfile(data)
        // todo: async -> resetState
        onProfileCreate?.(profile)
        // todo: might need to reuse submission mechanics -> delegate to "handler" e.g. onProfileUpdate
    }

    // todo: should be domain (values->entity & entity->values)
    const mapValuesToProfile = (data) => {
        // todo: icon should be actual icon (de-coupling from icon lib?!)
        // todo: id -> undefined :(
        return {id: data.id, url: data.profileUrl, title: data.profileTitle, icon: profileIconName}
    }

    // todo: needed?! (sub react ref/id)
    // const idProperties = (this.props.primaryInput) ? {} : {id: this.props.id}

    // todo: need improved naming
    // let className = 'SettingProfile'
    // if (this.props.primaryInput) className += ' PrimaryInput'
    //
    // const draggableOptions = (this.props.noDragHandle) ? {} : {draggable: true, onDragStart: this.props.dragStart, onDragEnd: this.props.dragEnd}

    return (
        /*
        <div {...idProperties} className={className} {...draggableOptions}>
        */

        <div>
            {/*
            <ProfileHandle showHandle={!this.props.noDragHandle}/>
            */}

            <ProfileUrl register={register} errors={errors}/>
            <ProfileTitle register={register} errors={errors}/>
            <ProfileIcon icon={profileIconName}/>

            {onProfileCreate && <ProfileAdd onCreate={onProfileAddHandler} enabled={isValid}/>}
            {onProfileRemove && <ProfileRemove onRemove={onProfileRemove}/>}
        </div>
    )
}
