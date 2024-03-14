import { createContext, useContext } from 'react'

const DataContext = createContext(null)

export const useDataContext = () => {
    const context = useContext(DataContext)
    if (context === undefined) {
        console.log('Data Context not set!')
    }
    return context
}

export default DataContext
