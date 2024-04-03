import React from 'react'

import { obtainExactIconInLibraries } from '../../utility/icon/icon-lib-utility'

export const DisplayIcon = ({ icon }) => {
    const SpecificIcon = obtainExactIconInLibraries(icon)

    return <SpecificIcon/>
}