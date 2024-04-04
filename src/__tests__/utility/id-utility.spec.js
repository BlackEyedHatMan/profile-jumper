import { generateUniqueId } from '../../utility/identifier/id-utility'

describe('ID Utility', () => {

    test.skip('should generate unique id', () => {
        const id = generateUniqueId()
        expect(id).not.toBeNull()
        expect(id).toHaveLength(36)
        expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    })

})