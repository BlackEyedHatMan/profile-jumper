import { hasValue, isSame } from '../string/string-utility'
import { DEFAULT_ICON_NAME, IconLibraries } from '../../config/IconLibraries'

export const obtainExactIconInLibraries = (name, iconLibraries) => {
    const ICON_NOT_FOUND = undefined
    if (!hasValue(name)) return ICON_NOT_FOUND
    const libKey = name.substring(0, 2).toLowerCase()
    const iconLib = iconLibraries.get(libKey)
    if (!iconLib) return ICON_NOT_FOUND
    return iconLib[name]
}

export const findIconInLibraries = (name, iconLibraries) => {
    if (!hasValue(name)) return undefined
    const foundIcons = []
    for (const [key, lib] of iconLibraries.entries()) {
        const iconFound = findIconInLibrary(name, lib, key)
        if (iconFound) foundIcons.push(iconFound)
    }
    return (foundIcons.length === 0) ? undefined : foundIcons[0]
}

const findIconInLibrary = (name, iconLib, libKey) => {
    const libKeyLen = libKey.length
    for (let libIconName of Object.keys(iconLib)) {
        const libIconNameNormed = normIconName(libIconName, libKeyLen)
        if (isSame(libIconNameNormed, name)) return iconLib[libIconName]
    }
}

export const findIconNameForUrl = (url, iconLibraries=IconLibraries) => {
    const urlScrubbed = scrubUrlParts(url)
    const foundResult = findIconInLibraries(urlScrubbed, iconLibraries)
    if (foundResult) return normIconName(foundResult.name)
    return normIconName(DEFAULT_ICON_NAME)
}

const scrubUrlParts = (url) => {
    const urlWithoutPreAndTldPartsRegex = /^(http|s|:|\/)*|(\.\w+)$/gi
    return url.replace(urlWithoutPreAndTldPartsRegex, '').trim()
}

const normIconName = (iconName, keyLen=2) => {
    return iconName.substring(keyLen)
}
