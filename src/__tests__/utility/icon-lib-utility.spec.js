import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'

import { findIconInLibraries, findIconNameForUrl, findIconNameTitle, obtainExactIconInLibraries } from '../../utility/icon/icon-lib-utility'

describe('LibraryIcon Lib Utility', () => {

    test('should direct find an exact icon in single icon library', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)

        const icon = findIconInLibraries('Google', iconLibraries)
        expect(icon.name).toEqual('SiGoogle')
    })

    test('should find icon matching case insensitive value in single icon library', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)

        const icon = findIconInLibraries('google', iconLibraries)
        expect(icon.name).toEqual('SiGoogle')

        const otherIcon = findIconInLibraries('gOoGlE', iconLibraries)
        expect(otherIcon.name).toEqual('SiGoogle')
    })

    test('should direct find an exact icon in multiple icon libraries', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        // will find based on order of defined icon libs e.g. if SI is 1st, will find it there
        const icon = findIconInLibraries('Google', iconLibraries)
        expect(icon.name).toEqual('SiGoogle')
    })

    test('should not find an icon in single icon library', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)

        const icon = findIconInLibraries('Not An LibraryIcon', iconLibraries)
        expect(icon).toBeUndefined()
    })

    test('should find icon in 2nd library', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        const icon = findIconInLibraries('Link', iconLibraries)
        expect(icon.name).toEqual('FaLink')
    })

    test('should find default icon', () => {
        const iconLibraries = new Map()
        iconLibraries.set('fa', faIcons)

        const icon = obtainExactIconInLibraries('FaLink', iconLibraries)
        expect(icon.name).toEqual('FaLink')
    })

    test('should not find default icon when supplied name is invalid', () => {
        const iconLibraries = new Map()
        iconLibraries.set('fa', faIcons)

        expect(obtainExactIconInLibraries(undefined, iconLibraries)).toBeUndefined()
        expect(obtainExactIconInLibraries(null, iconLibraries)).toBeUndefined()
        expect(obtainExactIconInLibraries('', iconLibraries)).toBeUndefined()
        expect(obtainExactIconInLibraries('  ', iconLibraries)).toBeUndefined()
    })

    test('should not find default icon when supplied name is invalid', () => {
        const iconLibraries = new Map()
        iconLibraries.set('fa', faIcons)

        const icon = obtainExactIconInLibraries('Non-Existent-Icon', iconLibraries)
        expect(icon).toBeUndefined()
    })

    test('should find icon name for explicit url name part', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        const googleIconName = findIconNameForUrl('https://google.com', iconLibraries)
        expect(googleIconName).toEqual('Google')

        const metaIconName = findIconNameForUrl('https://meta.com', iconLibraries)
        expect(metaIconName).toEqual('Meta')
    })

    test('should find default icon name for non matching url name part', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        const iconName = findIconNameForUrl('https://non-existent-icon.com', iconLibraries)
        expect(iconName).toEqual('Link')
    })

    test('should find icon name for title', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        const googleIconName = findIconNameTitle('Google', iconLibraries)
        expect(googleIconName).toEqual('Google')

        const linkedInIconName = findIconNameTitle('linkedIn', iconLibraries)
        expect(linkedInIconName).toEqual('Linkedin')
    })

    test('should find default icon name for title which does not have icon', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        const iconName = findIconNameTitle('Non-Existent-Icon', iconLibraries)
        expect(iconName).toEqual('Link')
    })

    test('should find icon name for title nearest match', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        expect(findIconNameTitle('Goo', iconLibraries)).toEqual('Google')
        expect(findIconNameTitle('Good', iconLibraries)).toEqual('Goodreads')
    })

    test('should find icon name for aliases as priority over icon library names', () => {
        const iconLibraries = new Map()
        iconLibraries.set('si', siIcons)
        iconLibraries.set('fa', faIcons)

        expect(findIconNameTitle('study', iconLibraries)).toEqual('GraduationCap')
        expect(findIconNameTitle('analytics', iconLibraries)).toEqual('ChartLine')
        expect(findIconNameTitle('booking', iconLibraries)).toEqual('Hotel')
        expect(findIconNameTitle('broker', iconLibraries)).toEqual('Handshake')
        expect(findIconNameTitle('code', iconLibraries)).toEqual('LaptopCode')
        expect(findIconNameTitle('chrome webstore', iconLibraries)).toEqual('Chrome')
        expect(findIconNameTitle('credit', iconLibraries)).toEqual('FileInvoiceDollar')
        expect(findIconNameTitle('derivatives', iconLibraries)).toEqual('FileContract')
        expect(findIconNameTitle('email', iconLibraries)).toEqual('Envelope')
        expect(findIconNameTitle('finance', iconLibraries)).toEqual('ChartBar')
        expect(findIconNameTitle('gov', iconLibraries)).toEqual('Archway')
        expect(findIconNameTitle('news', iconLibraries)).toEqual('Newspaper')
        expect(findIconNameTitle('vpn', iconLibraries)).toEqual('UserShield')
    })

})
