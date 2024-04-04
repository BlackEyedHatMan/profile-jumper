import { capitalize, doesContain, hasValue, isSame } from '../../utility/string/string-utility'

describe('String Utility', () => {

    test('should capitalize string', () => {
        const result = capitalize('UPGRADE')
        expect(result).toEqual('Upgrade')
    })

    test('should not capitalize when not string', () => {
        const undefinedString = undefined
        expect(capitalize(undefinedString)).toEqual(undefined)

        const nullString = null
        expect(capitalize(nullString)).toEqual(null)

        const emptyString = ''
        expect(capitalize(emptyString)).toEqual('')

        const blankString = '   '
        expect(capitalize(blankString)).toEqual('   ')
    })

    test('should match strings which values are equal', () => {
        expect(isSame('Cat', 'Cat')).toBeTruthy()
        expect(isSame('dog', 'dog')).toBeTruthy()
    })

    test('should match strings which values are equal regardless of case', () => {
        expect(isSame('cAt', 'Cat')).toBeTruthy()
        expect(isSame('doG', 'dog')).toBeTruthy()
    })

    test('should match strings which values are equal without trailing spaces', () => {
        expect(isSame('Cat', ' Cat')).toBeTruthy()
        expect(isSame('Dog', 'dog  ')).toBeTruthy()
        expect(isSame('Rat', '  rAt   ')).toBeTruthy()
    })

    test('should not match strings which are not strings', () => {
        expect(isSame('Cat', undefined)).toBeFalsy()
        expect(isSame('Dog', null)).toBeFalsy()
    })

    test('should result in having a string value', () => {
        expect(hasValue('Cat')).toBeTruthy()
    })

    test('should result in not having a string value', () => {
        expect(hasValue(undefined)).toBeFalsy()
        expect(hasValue(null)).toBeFalsy()
        expect(hasValue('')).toBeFalsy()
        expect(hasValue('    ')).toBeFalsy()
    })

    test('should contain string value', () => {
        expect(doesContain('Catty', 'Cat')).toBeTruthy()
        expect(doesContain('Profile', 'Pro')).toBeTruthy()
    })

    test('should not contain string value when either value is invalid', () => {
        expect(doesContain('Catty', undefined)).toBeFalsy()
        expect(doesContain('Catty', null)).toBeFalsy()
        expect(doesContain(undefined, 'Cat')).toBeFalsy()
        expect(doesContain(null, 'Cat')).toBeFalsy()
        expect(doesContain(undefined, undefined)).toBeFalsy()
        expect(doesContain(null, null)).toBeFalsy()
        expect(doesContain(undefined, null)).toBeFalsy()
        expect(doesContain(null, undefined)).toBeFalsy()
    })

})