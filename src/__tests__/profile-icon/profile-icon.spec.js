import * as profileIcon from '../../utility/profile/profile-icon'

describe('Profile Icon', () => {

    test('find solid profile icon for name', () => {
        const name = 'Ad'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('ad')
    })

    test('find solid profile icon for name not capitalized', () => {
        const name = 'ad'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('ad')
    })

    test('find solid profile icon for similar name', () => {
        const name = 'BookDead'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('book-dead')
    })

    test('find brand profile icon for brand name', () => {
        const name = 'Amazon'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('amazon')
    })

    test('find brand profile icon for brand name lowercase', () => {
        const name = 'amazon'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('amazon')
    })

    test('find default link for profile icon if icon cannot be found for name', () => {
        const name = '!Non-Existing-Icon-Name!'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('link')
    })

    test('find default link for profile icon if icon is empty', () => {
        const name = ''
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('link')
    })

    test('find default link for profile icon if icon is blank', () => {
        const name = '   '
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('link')
    })

    test('find default link for profile icon if icon null', () => {
        const result = profileIcon.findProfileIcon(null)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('link')
    })

    test('should find default link for profile icon when icon is undefined', () => {
        const result = profileIcon.findProfileIcon(undefined)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('link')
    })

    test('find profile icon for icon explicitly', () => {
        const name = 'Dragon'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).toBe('dragon')
    })

    test('should find profile icon for icon which starts with name', () => {
        const name = 'go'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).not.toBe('dragon')
        expect(result.iconName).toBe('link')
    })

    test('should find profile icon for icon which which is near match', () => {
        const name = 'Golfball'
        const result = profileIcon.findProfileIcon(name)
        expect(result).not.toBeNull()
        expect(result.iconName).not.toBe('dragon')
        expect(result.iconName).toBe('golf-ball')
    })

    test('should find profile icon for explicit match over first hit', () => {
        expect(profileIcon.findProfileIcon('github').iconName).toBe('github')
        expect(profileIcon.findProfileIcon('git').iconName).toBe('git')
        expect(profileIcon.findProfileIcon('node').iconName).toBe('node')
        expect(profileIcon.findProfileIcon('linode').iconName).toBe('linode')
    })

})
