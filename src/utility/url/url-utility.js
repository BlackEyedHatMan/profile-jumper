import { hasValue } from '../string/string-utility'

export const scrubUrlParts = (url) => {
    if(!hasValue(url)) return url
    const urlWithoutPreAndTldPartsRegex = /^(?:https?:\/\/)?(?:www\.)?([^\.]+)/i // extracts name from domain
    const matchResult = url.match(urlWithoutPreAndTldPartsRegex)
    return (matchResult) ? matchResult[1] : url
}
