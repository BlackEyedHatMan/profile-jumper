
// todo: need to handle hints!
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
