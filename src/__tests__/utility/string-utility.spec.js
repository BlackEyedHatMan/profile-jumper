import { capitalize } from '../../utility/string/string-utility'

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

})