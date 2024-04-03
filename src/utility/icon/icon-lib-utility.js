import { contains, hasValue, isSame } from '../string/string-utility'
import { DEFAULT_ICON_NAME, IconLibraries } from '../../config/IconLibraries'

export const obtainExactIconInLibraries = (exactIconName, iconLibraries=IconLibraries) => {
    const ICON_NOT_FOUND = undefined
    if (!hasValue(exactIconName)) return ICON_NOT_FOUND
    const libKey = exactIconName.substring(0, 2).toLowerCase()
    const iconLib = iconLibraries.get(libKey)
    if (!iconLib) return ICON_NOT_FOUND
    return iconLib[exactIconName]
}

export const findIconInLibraries = (name, iconLibraries=IconLibraries) => {
    if (!hasValue(name)) return undefined
    const foundIcons = []
    for (const [key, lib] of iconLibraries.entries()) {
        const iconsFound = findIconsInLibrary(name, lib, key)
        if (iconsFound) foundIcons.push(iconsFound)
    }
    foundIcons.sort(sizeSort)
    return (foundIcons.length === 0) ? undefined : foundIcons[0][1]
}

const findIconsInLibrary = (name, iconLib, libKey) => {
    const libKeyLen = libKey.length
    const foundIcons = []
    for (let libIconName of Object.keys(iconLib)) {
        const libIconNameNormed = normIconName(libIconName, libKeyLen)
        if (isSame(libIconNameNormed, name)) foundIcons.push([libIconName, iconLib[libIconName]])
        if (contains(libIconNameNormed, name)) foundIcons.push([libIconName, iconLib[libIconName]])
    }

    if(!foundIcons || foundIcons.length === 0) return undefined

    foundIcons.sort((a, b) => relevanceSort(a, b, name))
    foundIcons.sort(sizeSort)

    return foundIcons[0]
}

const relevanceSort = (a, b, name) => {
    const normedA = a[0]
    const normedB = b[0]
    if(normedA.startsWith(name)) return -1
    if(normedB.startsWith(name)) return 1
}

const sizeSort = (a, b) => {
    const normedA = a[0]
    const normedB = b[0]
    return normedA.length - normedB.length
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

export const findIconNameTitle = (title, iconLibraries=IconLibraries) => {
    const foundResult = findIconInLibraries(title, iconLibraries)
    if (foundResult) return normIconName(foundResult.name)
    return normIconName(DEFAULT_ICON_NAME)
}

const normIconName = (iconName, keyLen=2) => {
    return iconName.substring(keyLen)
}
