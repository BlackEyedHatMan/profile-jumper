import * as browserStorage from '../../storage/browserStorage'
import { objectPropertyArrayOrDefault } from '../utility'

export const INITIALIZE_PROFILES = 'INITIALIZE_PROFILES'
export const SET_PROFILES = 'SET_PROFILES'
export const PROFILES_PERSISTED = 'PROFILES_PERSISTED'
export const CREATE_PROFILE = 'CREATE_PROFILE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const DELETE_PROFILE = 'DELETE_PROFILE'
export const DELETE_ALL_PROFILES = 'DELETE_ALL_PROFILES'
export const RE_ORDER_PROFILE = 'RE_ORDER_PROFILE'

export const createProfileAction = createdProfile => {
    return {
        type: CREATE_PROFILE,
        profile: createdProfile
    }
}

export const updateProfileAction = (profile) => {
  return {
      type: UPDATE_PROFILE,
      profile: profile
  }
}

export const deleteProfileAction = (id) => {
  return {
      type: DELETE_PROFILE,
      id: id
  }
}

export const deleteAllProfilesAction = () => {
  return {
      type: DELETE_ALL_PROFILES
  }
}

export const reOrderProfileAction = (id, beforeId) => {
  return {
      type: RE_ORDER_PROFILE,
      id: id,
      beforeId: beforeId
  }
}

export const initializeProfilesAction = () => {
    return {
        type: INITIALIZE_PROFILES
    }
}

export const setProfilesAction = (profiles) => {
  return {
      type: SET_PROFILES,
      profiles: profiles
}
}

export const retrieveFromPersistentProfilesAction = () => {
  return dispatch => {
    dispatch(initializeProfilesAction())
    browserStorage && browserStorage.retrieveFromBrowserStorage((browserState) => {
        const profiles = objectPropertyArrayOrDefault(browserState, 'profiles')
        dispatch(setProfilesAction(profiles))
    })
  }
}

export const profilesPersistedAction = () => {
  return {
      type: PROFILES_PERSISTED
  }
}

export const saveAsPersistentProfilesAction = (profiles) => {
  return dispatch => {
    browserStorage && browserStorage.storeToBrowserStorage(profiles)
    dispatch(profilesPersistedAction())
  }
}

export const dispatchAndPersistActionMiddleware = nextAction => {
  return (dispatch, getState) => {
    dispatch(nextAction)
    const profileStoreState = getState()
    const profiles = {profiles: profileStoreState.profileStore.profiles}
    dispatch(saveAsPersistentProfilesAction(profiles))
  }
}

export const createProfileAndPersistAction = profile => {
  return dispatchAndPersistActionMiddleware( createProfileAction(profile) )
}

export const updateProfileAndPersistAction = profile => {
  return dispatchAndPersistActionMiddleware( updateProfileAction(profile) )
}

export const deleteProfileAndPersistAction = id => {
  return dispatchAndPersistActionMiddleware( deleteProfileAction(id) )
}

export const deleteAllProfilesAndPersistAction = () => {
  return dispatchAndPersistActionMiddleware( deleteAllProfilesAction() )
}

export const reOrderProfileAndPersistAction = (id, beforeId) => {
  return dispatchAndPersistActionMiddleware( reOrderProfileAction(id, beforeId) )
}
