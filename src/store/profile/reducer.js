import { updateObject } from '../utility.js'
import { generateUniqueId } from '../../utility/identifier/id-utility'

import {
  INITIALIZE_PROFILES,
  SET_PROFILES,
  PROFILES_PERSISTED,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  DELETE_ALL_PROFILES,
  RE_ORDER_PROFILE
} from './action'

const initialCentralStoreState = {
    profiles: [],
    loading: false,
    error: null,
    profilesInitialized: false,
    profilesPersisted: false
}

const initializeProfiles = (centralStoreState, action) => {
  return updateObject(centralStoreState, { profilesInitialized: true })
}

const setProfiles = (centralStoreState, action) => {
  return updateObject(centralStoreState, { profiles: action.profiles })
}

const persistedProfiles = (centralStoreState, action) => {
  return updateObject(centralStoreState, { profilesPersisted: true })
}

const createProfile = (centralStoreState, action) => {
  const uniqueId = generateUniqueId()
  const orderForCreatedProfile = (centralStoreState.profiles.length === 0) ? 0 : centralStoreState.profiles.slice(-1)[0].ordinal + 1
  const profileToCreate = updateObject(action.profile, {id: uniqueId, ordinal: orderForCreatedProfile})
  const updatedProfiles = centralStoreState.profiles.concat(profileToCreate)
  return updateObject(centralStoreState, { profiles: updatedProfiles })
}

const deleteProfile = (centralStoreState, action) => {
  const deleteId = action.id
  const existingProfilesWithoutDeleted = centralStoreState.profiles.filter(profile => profile.id !== deleteId)
  return updateObject(centralStoreState, { profiles: existingProfilesWithoutDeleted })
}

const deleteAllProfiles = (centralStoreState, action) => {
  return updateObject(centralStoreState, { profiles: [] })
}

const updateProfile = (centralStoreState, action) => {
  const updatedProfile = action.profile
  const profiles = centralStoreState.profiles.filter(profile => profile.id !== updatedProfile.id)
  const profilesWithUpdatedProfile = profiles.concat(updatedProfile)
  return updateObject(centralStoreState, { profiles: profilesWithUpdatedProfile })
}

const reOrderProfile = (centralStoreState, action) => {
  const profileIdToReOrderId = action.id
  const beforeOtherProfileId = action.beforeId

  if(centralStoreState.profiles.length <= 1) return centralStoreState

  const profilesCopy = [...centralStoreState.profiles]
  const profiles = profilesCopy.filter(profile => profile.id !== profileIdToReOrderId)
  const profileToMove = profilesCopy.filter(profile => profile.id === profileIdToReOrderId)[0]
  const profileToInsertBefore = profilesCopy.filter(profile => profile.id === beforeOtherProfileId)[0]

  //swap profiles
  if(profilesCopy.length === 2) {
    const updatedProfiles = [{...profileToMove, ordinal: profileToInsertBefore.ordinal}, {...profileToInsertBefore, ordinal: profileToMove.ordinal}]
    const orderedProfiles = updatedProfiles.sort((a, b) => (a.ordinal > b.ordinal) ? 1 : -1)
    return updateObject(centralStoreState, { profiles: orderedProfiles })
  }

  //insert before move to before position and reindex
  if(profilesCopy.length > 2) {
    profiles.splice(profileToInsertBefore.ordinal, 0, profileToMove)
    const profilesReOrdered = reorderProfiles(profiles)
    return updateObject(centralStoreState, { profiles: profilesReOrdered })
  }
}

const reorderProfiles = (profiles) => {
  return profiles.map((profile, index) => {
    return {...profile, ordinal: index}
  })
}

const reducer = (centralStoreState = initialCentralStoreState, action) => {
    switch(action.type) {
        case INITIALIZE_PROFILES  : return initializeProfiles(centralStoreState, action)
        case SET_PROFILES         : return setProfiles(centralStoreState, action)
        case PROFILES_PERSISTED   : return persistedProfiles(centralStoreState, action)
        case CREATE_PROFILE       : return createProfile(centralStoreState, action)
        case DELETE_PROFILE       : return deleteProfile(centralStoreState, action)
        case DELETE_ALL_PROFILES  : return deleteAllProfiles(centralStoreState, action)
        case UPDATE_PROFILE       : return updateProfile(centralStoreState, action)
        case RE_ORDER_PROFILE     : return reOrderProfile(centralStoreState, action)
        default                   : return centralStoreState
    }
}

export default reducer
