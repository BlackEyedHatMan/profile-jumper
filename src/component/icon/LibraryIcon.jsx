import React from 'react'

import { obtainExactIconInLibraries } from '../../utility/icon/icon-lib-utility'
import { DEFAULT_ICON_NAME, IconLibraries } from '../../config/IconLibraries'

export const LibraryIcon = ({ iconName, color, className, onClick }) => {
    const ExactIcon = obtainExactIconInLibraries(iconName, IconLibraries)

    if (!ExactIcon) {
        const DefaultIcon = obtainExactIconInLibraries(DEFAULT_ICON_NAME, IconLibraries)
        return <DefaultIcon style={ { 'color': color } } className={ className } onClick={ onClick }/>
    }

    return <ExactIcon style={ { 'color': color } } className={ className } onClick={ onClick }/>
}
