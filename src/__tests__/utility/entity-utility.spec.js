import { isEntityEmpty } from '../../utility/entity/entity-utility'

describe('Entity Utility', () => {

    test('entity is not empty', () => {
        const entity = { name: 'Mr Upgradable' }
        expect(isEntityEmpty(entity)).toBeFalsy()
    })

    test('entity is empty', () => {
        const entity = {}
        expect(isEntityEmpty(entity)).toBeTruthy()
    })

    test('entity is empty when entity is null or undefined', () => {
        const nullEntity = null
        expect(isEntityEmpty(nullEntity)).toBeTruthy()

        const undefinedEntity = undefined
        expect(isEntityEmpty(undefinedEntity)).toBeTruthy()
    })

})
