import { doesContain, hasValue, normForCompare } from '../string/string-utility'
import { DEFAULT_ICON_NAME, IconAliases, IconLibraries } from '../../config/IconLibraries'
import { scrubUrlParts } from '../url/url-utility'

export const obtainExactIconInLibraries = (exactIconName, iconLibraries = IconLibraries) => {
    const ICON_NOT_FOUND = undefined
    if (!hasValue(exactIconName)) return ICON_NOT_FOUND
    const libKey = exactIconName.substring(0, 2).toLowerCase()
    const iconLib = iconLibraries.get(libKey)
    if (!iconLib) return ICON_NOT_FOUND
    return iconLib[exactIconName]
}

export const findIconInLibraries = (name, iconLibraries = IconLibraries) => {
    if (!hasValue(name)) return undefined

    const aliasedIcon = preferAliasedIcon(name)
    if (aliasedIcon) return aliasedIcon

    const candidates = collectMatchingIcons(name, iconLibraries)
    if (candidates.length === 0) return undefined

    const sought = normForCompare(name)
    candidates.sort((a, b) => compareIconRelevance(a, b, sought))

    const best = candidates[0]
    return iconResult(best.name, best.icon)
}

const iconResult = (iconName, icon) => {
    return {
        name: iconName,
        icon: icon
    }
}

const preferAliasedIcon = (name) => {
    const aliasedIcon = IconAliases.get(normForCompare(name))
    if (!aliasedIcon) return undefined
    return iconResult(aliasedIcon, obtainExactIconInLibraries(aliasedIcon))
}

// candidates keep library insertion order, so the sort's stability
// preserves library priority between equally relevant matches
const collectMatchingIcons = (name, iconLibraries) => {
    const candidates = []
    for (const [libKey, iconLib] of iconLibraries.entries()) {
        for (const libIconName of Object.keys(iconLib)) {
            const matchName = normForCompare(normIconName(libIconName, libKey.length))
            if (doesContain(matchName, name)) {
                candidates.push({ name: libIconName, icon: iconLib[libIconName], matchName })
            }
        }
    }
    return candidates
}

// exact match, then prefix match, then any containing match; shortest name wins within a rank
const compareIconRelevance = (a, b, sought) => {
    const rank = (candidate) => {
        if (candidate.matchName === sought) return 0
        if (candidate.matchName.startsWith(sought)) return 1
        return 2
    }
    return (rank(a) - rank(b)) || (a.matchName.length - b.matchName.length)
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
