import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { appRoutes } from './route/appRoutes'

const App = () => (
    <RouterProvider router={appRoutes} />
)

export default App
