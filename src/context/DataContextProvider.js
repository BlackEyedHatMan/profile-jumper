import { useRef } from 'react'
import { createStore } from 'jotai'

import DataContext from './DataContext'

export const DataContextProvider = ({ children }) => {
    const dataStore = useRef(createStore())

    return (
        <DataContext.Provider value={ dataStore.current }>
            { children }
        </DataContext.Provider>
    )
}