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
import { BlockIcon } from './profile-block/BlockIcon'
import { BlockSetting } from './profile-block/BlockSetting'

import './SettingProfile.css'
import './SettingProfileWrapper.css'
import './SettingProfileRow.css'

export const SettingProfile = ({ profile, onProfileCreate, onProfileRemove, onProfileUpdate, primaryInput, isDragging }) => {
    const [editProfileData, setEditProfileData] = useState(mapProfileToData(profile))
    const [updated, setUpdated] = useState(false)
    const [showBlockSetting, setShowBlockSetting] = useState(false)
    const [isEditingBlock, setIsEditingBlock] = useState(false)

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
        if (onProfileUpdate && updated) {
            const updateTimer = setTimeout(() => {
                const profileToUpdate = mapValuesToProfile(editProfileData)
                onProfileUpdate(profileToUpdate)
                setUpdated(false)
            }, isEditingBlock ? 0 : 2000) // Apply immediately when in editing mode, otherwise debounce

            return () => {
                clearTimeout(updateTimer)
            }
        }
    }, [updated, editProfileData, onProfileUpdate, isEditingBlock])


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

    const handleBlockToggle = () => {
        const willShow = !showBlockSetting

        setShowBlockSetting(willShow)

        if (willShow) {
            setIsEditingBlock(true)
        } else {
            setIsEditingBlock(false)
            setUpdated(true)
        }
    }

    const handleBlockSettingChange = (blockData) => {
        const isSignificantChange = 
            (blockData === null && editProfileData.block) || 
            (blockData !== null && !editProfileData.block) ||
            (blockData !== null && editProfileData.block && 
             (blockData.startTime !== editProfileData.block.startTime || 
              blockData.endTime !== editProfileData.block.endTime ||
              JSON.stringify(blockData.selectedDays) !== JSON.stringify(editProfileData.block.selectedDays)))

        setEditProfileData(epd => {
            if (blockData === null) {
                const { block, ...restData } = epd
                return restData
            }

            return { ...epd, block: blockData }
        })

        if (isSignificantChange) {
            setUpdated(true)
        }

        setShowBlockSetting(true)
        setIsEditingBlock(true)
    }

    let className = 'SettingProfile'
    if (primaryInput) className += ' PrimaryInput'
    if (onProfileUpdate && updated) className += ' Updating'
    if (isDragging) className += ' Dragging'

    return (
        <div className='SettingProfileWrapper'>
            <div className='SettingProfileRow'>
                <div className={ className }>
                    { !primaryInput && <ProfileHandle/> }

                    <ProfileUrl register={ register } errors={ errors }/>
                    <ProfileTitle register={ register } errors={ errors }/>
                    <SettingProfileIcon iconName={ editProfileData.profileIcon } onColorChange={ onIconColorChange } color={ editProfileData?.profileIconColor } block={ editProfileData?.block }/>

                    { onProfileCreate && <ProfileAdd onCreate={ onProfileAddHandler } enabled={ isValid }/> }
                    { onProfileRemove && <ProfileRemove onRemove={ onProfileRemove }/> }
                </div>

                { !primaryInput ? (
                    <BlockIcon 
                        onBlock={handleBlockToggle} 
                        blockData={editProfileData.block}
                    />
                ) : (
                    <div className="spacer-element"></div>
                )}
            </div>

            { showBlockSetting && !primaryInput &&
                <BlockSetting 
                    onBlockSettingChange={handleBlockSettingChange} 
                    initialBlockData={editProfileData.block || null}
                /> 
            }
        </div>
    )
}
