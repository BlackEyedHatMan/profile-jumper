import { doesContain, hasValue, isSame, normForCompare } from '../string/string-utility'
import { DEFAULT_ICON_NAME, IconAliases, IconLibraries } from '../../config/IconLibraries'
import { scrubUrlParts } from '../url/url-utility'

export const obtainExactIconInLibraries = (exactIconName, iconLibraries = IconLibraries) => {
    const ICON_NOT_FOUND = undefined
    if (!hasValue(exactIconName)) return ICON_NOT_FOUND
    const libKey = exactIconName.substring(0, 2).toLowerCase()
    const iconLib = iconLibraries.get(libKey)
    if (!iconLib) return ICON_NOT_FOUND
    if (!iconLib) return ICON_NOT_FOUND
    return iconLib[exactIconName]
}

export const findIconInLibraries = (name, iconLibraries = IconLibraries) => {
    if (!hasValue(name)) return undefined

    const aliasedIcon = preferAliasedIcon(name)
    if (aliasedIcon) return aliasedIcon

    const foundIcons = []
    for (const [key, lib] of iconLibraries.entries()) {
        const iconsFound = findIconsInLibrary(name, lib, key)
        if (iconsFound) foundIcons.push(iconsFound)
    }
    foundIcons.sort(sizeSort)
    return extractFirstIcon(foundIcons)
}

const extractFirstIcon = (icons) => {
    if (!icons || icons.length === 0) return undefined
    const [iconName, icon] = icons[0]
    return iconResult(iconName, icon)
}

const iconResult = (iconName, icon) => {
    return {
        name: iconName,
        icon: icon
    }
}

const preferAliasedIcon = (name) => {
    const normedValue = normForCompare(name)
    const aliasedIcon = (IconAliases.has(normedValue)) ? IconAliases.get(normedValue) : undefined
    if (aliasedIcon) {
        const exactIcon = obtainExactIconInLibraries(aliasedIcon)
        return iconResult(aliasedIcon, exactIcon)
    }
    return undefined
}

const findIconsInLibrary = (name, iconLib, libKey) => {
    const libKeyLen = libKey.length
    const foundIcons = []
    for (let libIconName of Object.keys(iconLib)) {
        const libIconNameNormed = normIconName(libIconName, libKeyLen)
        if (isSame(libIconNameNormed, name)) foundIcons.push([libIconName, iconLib[libIconName]])
        if (doesContain(libIconNameNormed, name)) foundIcons.push([libIconName, iconLib[libIconName]])
    }

    if (!foundIcons || foundIcons.length === 0) return undefined

    foundIcons.sort((a, b) => relevanceSort(a, b, name))
    foundIcons.sort(sizeSort)

    return foundIcons[0]
}

const relevanceSort = (a, b, name) => {
    const normedA = a[0]
    const normedB = b[0]
    if (normedA.startsWith(name)) return -1
    if (normedB.startsWith(name)) return 1
}

const sizeSort = (a, b) => {
    const normedA = a[0]
    const normedB = b[0]
    return normedA.length - normedB.length
}

export const findIconNameForUrl = (url, iconLibraries = IconLibraries) => {
    const urlScrubbed = scrubUrlParts(url)
    const foundResult = findIconInLibraries(urlScrubbed, iconLibraries)
    return (!foundResult) ? DEFAULT_ICON_NAME : foundResult.name
}

export const findIconNameTitle = (title, iconLibraries = IconLibraries) => {
    const foundResult = findIconInLibraries(title, iconLibraries)
    return (!foundResult) ? DEFAULT_ICON_NAME : foundResult.name
}

export const normIconName = (iconName, keyLen = 2) => {
    return iconName.substring(keyLen)
}
