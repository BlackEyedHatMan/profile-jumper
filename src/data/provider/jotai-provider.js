import { atom, useAtomValue, useSetAtom } from 'jotai'

import { useDataContext } from '../../context/DataContext'

const profilesAtom = atom([])

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
