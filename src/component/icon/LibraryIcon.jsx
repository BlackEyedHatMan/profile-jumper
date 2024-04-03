import React from 'react'

import { findIconInLibraries, obtainExactIconInLibraries } from '../../utility/icon/icon-lib-utility'
import { DEFAULT_ICON_NAME, IconLibraries } from '../../config/IconLibraries'

export const LibraryIcon = ({ name, color, className, onClick }) => {
    const SoughtIcon = findIconInLibraries(name, IconLibraries)

    if (!SoughtIcon) {
        const DefaultIcon = obtainExactIconInLibraries(DEFAULT_ICON_NAME, IconLibraries)
        return <DefaultIcon style={ { 'color': color } } className={ className } onClick={ onClick }/>
    }

    return <SoughtIcon style={ { 'color': color } } className={ className } onClick={ onClick }/>
}
