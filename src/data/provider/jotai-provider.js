import { useAtomValue, useSetAtom, atom } from 'jotai'
import { useEffect } from 'react'

import { useDataContext } from '../../context/DataContext'

const profilesAtom = atom([])

// drops the block field left behind by the removed screen block feature
const stripLegacyBlockField = (profiles) => {
    if (!profiles.some(profile => profile && 'block' in profile)) return profiles
    return profiles.map(({ block, ...profile }) => profile)
}

export const useProfiles = () => {
    const profiles = useAtomValue(profilesAtom, {
        store: useDataContext()
    })
    const setProfiles = useSetAtom(profilesAtom, {
        store: useDataContext()
    })

    useEffect(() => {
        const loadProfiles = async () => {
            try {
                if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                    const result = await chrome.storage.local.get(['profiles']);
                    const storedProfiles = result.profiles || [];
                    const profiles = stripLegacyBlockField(storedProfiles);
                    setProfiles(profiles);
                    if (profiles !== storedProfiles) {
                        await chrome.storage.local.set({ profiles });
                    }
                } else {
                    const storedData = localStorage.getItem('profiles');
                    if (storedData) {
                        try {
                            const parsed = JSON.parse(storedData);
                            const storedProfiles = Array.isArray(parsed) ? parsed : [];
                            const profiles = stripLegacyBlockField(storedProfiles);
                            setProfiles(profiles);
                            if (profiles !== storedProfiles) {
                                localStorage.setItem('profiles', JSON.stringify(profiles));
                            }
                        } catch (e) {
                            console.error('Error parsing data from localStorage:', e);
                            setProfiles([]);
                        }
                    } else {
                        setProfiles([]);
                    }
                }
            } catch (error) {
                console.error('Error loading profiles:', error);
                setProfiles([]);
            }
        };

        loadProfiles();
    }, [setProfiles]);

    return profiles;
}

export const useSetProfiles = () => {
    const setProfiles = useSetAtom(profilesAtom, {
        store: useDataContext()
    })

    return async (newProfiles) => {
        try {
            setProfiles(newProfiles);

            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                await chrome.storage.local.set({ profiles: newProfiles });
            } else {
                localStorage.setItem('profiles', JSON.stringify(newProfiles));
            }
        } catch (error) {
            console.error('❌ Error saving profiles:', error);
        }
    };
}