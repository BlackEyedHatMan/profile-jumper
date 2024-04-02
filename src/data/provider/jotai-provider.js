import { useAtomValue, useSetAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { useDataContext } from '../../context/DataContext'

const profilesAtom = atomWithStorage('profiles', [])

export const useProfiles = () => {
    return useAtomValue(profilesAtom, {
        store: useDataContext()
    })
}

export const useSetProfiles = () => {
    return useSetAtom(profilesAtom, {
        store: useDataContext()
    })
}


