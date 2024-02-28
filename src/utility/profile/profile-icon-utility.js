import * as profileIcon from './profile-icon'

const profileIconHints = {
    timebomb: 'Bomb',
    study: 'GraduationCap',
    analytics: 'ChartLine',
    booking: 'Hotel',
    broker: 'Handshake',
    code: 'LaptopCode',
    'Chrome Webstore Dev' : 'LaptopCode',
    credit: 'FileInvoiceDollar',
    derivatives: 'FileContract',
    email: 'Envelope',
    finance: 'ChartBar',
    gov: 'Archway',
    news: 'Newspaper',
    'Indie Hackers': 'HandHoldingUsd',
    network: 'NetworkWired',
    vpn: 'UserShield'
}

const findProfileIconHint = (url) => {
    const urlLower = url.toLowerCase()
    for (let key of Object.keys(profileIconHints)) {
        if (urlLower.includes(key.toLowerCase())) return profileIconHints[key]
    }
    return ''
}

const scrubUrlParts = (url) => {
    const urlWithoutPreAndTldPartsRegex = /^(http|s|:|\/)*|(\.\w+)$/gi
    return url.replace(urlWithoutPreAndTldPartsRegex, '').trim()
}

const findProfileIconKeyForUrl = (url) => {
    const urlScrubbed = scrubUrlParts(url)
    return profileIcon.findProfileIconKey(urlScrubbed)
}

export const profileIconFromUrl = url => {
    return findProfileIconHint(url) || findProfileIconKeyForUrl(url) || ''
}

export const findProfileIconKeyForTitle = (title) => {
    return findProfileIconHint(title) || profileIcon.findProfileIconKey(title) || ''
}

export const sortProfilesById = (a, b) => a.id - b.id
