import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { appRoutes } from './route/appRoutes'
import { DataContextProvider } from './context/DataContextProvider'

const App = () => (
    <DataContextProvider>
        <RouterProvider router={ appRoutes }/>
    </DataContextProvider>
)

export default App
