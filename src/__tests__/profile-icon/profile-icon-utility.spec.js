import * as profileIconUtility from '../../utility/profile/profile-icon-utility'

describe('Profile Icon Utility', () => {

    test('should get profile icon hint for URL', () => {
        const URL = 'https://timebomb.today'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Bomb')
    })

    test('should not find profile icon hint for URL', () => {
        const URL = 'https://unknown-hint.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('')
    })

    test('should find profile icon based on brand priority for URL brand HTTP', () => {
        const URL = 'http://google.cloud.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Google')
    })

    test('should find profile icon based on brand priority for URL brand HTTPS', () => {
        const URL = 'https://google.cloud.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Google')
    })

    test('should find profile icon based on brand priority for URL containing brand', () => {
        const URL = 'https://google.cloud.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Google')
    })

    test('should find profile icon based on brand priority for URL with brand last', () => {
        const URL = 'https://console.cloud.google.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Google')
    })

    test('should find profile icon based on icon for URL', () => {
        const URL = 'https://console.cloud.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Cloud')
    })

    test('should find profile icon based on similar icon for URL', () => {
        const URL = 'https://icloud.com'
        const result = profileIconUtility.profileIconFromUrl(URL)
        expect(result).toBe('Cloud')
    })

    test('should find profile icon for explicit over first hit', () => {
        expect(profileIconUtility.profileIconFromUrl('https://apple.com')).toBe('Apple')
        expect(profileIconUtility.profileIconFromUrl('https://github.com')).toBe('Github')
        expect(profileIconUtility.profileIconFromUrl('https://git.com')).toBe('Git')
        expect(profileIconUtility.profileIconFromUrl('https://node.js')).toBe('Node')
        expect(profileIconUtility.profileIconFromUrl('https://linode.com')).toBe('Linode')
    })

    test('should get profile icon hints configured', () => {
        expect(profileIconUtility.findProfileIconKeyForTitle('timebomb')).toBe('Bomb')
        expect(profileIconUtility.findProfileIconKeyForTitle('study')).toBe('GraduationCap')
        expect(profileIconUtility.findProfileIconKeyForTitle('analytics')).toBe('ChartLine')
        expect(profileIconUtility.findProfileIconKeyForTitle('booking')).toBe('Hotel')
        expect(profileIconUtility.findProfileIconKeyForTitle('broker')).toBe('Handshake')
        expect(profileIconUtility.findProfileIconKeyForTitle('code')).toBe('LaptopCode')
        expect(profileIconUtility.findProfileIconKeyForTitle('Chrome Webstore Dev')).toBe('LaptopCode')
        expect(profileIconUtility.findProfileIconKeyForTitle('credit')).toBe('FileInvoiceDollar')
        expect(profileIconUtility.findProfileIconKeyForTitle('derivatives')).toBe('FileContract')
        expect(profileIconUtility.findProfileIconKeyForTitle('email')).toBe('Envelope')
        expect(profileIconUtility.findProfileIconKeyForTitle('finance')).toBe('ChartBar')
        expect(profileIconUtility.findProfileIconKeyForTitle('gov')).toBe('Archway')
        expect(profileIconUtility.findProfileIconKeyForTitle('news')).toBe('Newspaper')
        expect(profileIconUtility.findProfileIconKeyForTitle('Indie Hackers')).toBe('HandHoldingUsd')
        expect(profileIconUtility.findProfileIconKeyForTitle('network')).toBe('NetworkWired')
        expect(profileIconUtility.findProfileIconKeyForTitle('vpn')).toBe('UserShield')
    })

})
