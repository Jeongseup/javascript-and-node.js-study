const { expect } = require('chai')

describe('Throw Test', () => {
    const badFn = function () {
        throw new TypeError('Illegal type')
    }

    it('TypeError test', () => {
        //equal
        expect(badFn).to.throw(TypeError)
    })

    it('TypeError with Message test', () => {
        //equal
        expect(badFn).to.throw(TypeError, 'Illegal type')
    })

    it('TypeError trick', () => {
        //equal
        expect(badFn).to.throw('Illegal')
    })
})
