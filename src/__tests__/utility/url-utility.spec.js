import { scrubUrlParts } from '../../utility/url/url-utility'

describe('URL Utility', () => {

    test('should obtain basic domain info without protocol or tld', () => {
        expect(scrubUrlParts('https://google.com')).toEqual('google')
        expect(scrubUrlParts('https://test.co.uk')).toEqual('test')
    })

    test('should not exact url if invalid', () => {
        expect(scrubUrlParts(undefined)).toBeUndefined()
        expect(scrubUrlParts(null)).toBeNull()
        expect(scrubUrlParts('')).toEqual('')
        expect(scrubUrlParts('   ')).toEqual('   ')
        expect(scrubUrlParts('some-word')).toEqual('some-word')
    })

    test('should obtain smallest name from url', () => {
        expect(scrubUrlParts('https://x.com')).toEqual('x')
    })

    test('should obtain name from url when trailing parts like parameters', () => {
        expect(scrubUrlParts('https://x.com/black_eyed_hat_man')).toEqual('x')
        expect(scrubUrlParts('https://twitter.com/black_eyed_hat_man')).toEqual('twitter')
        expect(scrubUrlParts('https://www.instagram.com/blackeyedhatman')).toEqual('instagram')
        expect(scrubUrlParts('https://www.instagram.com/blackeyedhatman/?hl=en')).toEqual('instagram')
    })

    test('should obtain name from url with unconventional domain tld', () => {
        expect(scrubUrlParts('https://someones.technology')).toEqual('someones')
        expect(scrubUrlParts('https://www.someones.technology')).toEqual('someones')
    })

})
