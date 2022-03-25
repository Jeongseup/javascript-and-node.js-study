/* == chai ==
체이닝을 이용해 하나의 영어 문장으로 단일 테스트를 작성 가능
chai는 다음과 같은 chain들을 제공한다.
to, be, been, is, that, which, and, has, have, with, at, of ,same but, does, stil
*/
const { expect } = require('chai')

function sum(a, b) {
    return a + b
}

describe('Equal Test', () => {
    it('4 + 5 = 9', () => {
        //equal
        expect(sum(4, 5)).to.equal(9)
    })

    it('4 + 5 != 7', () => {
        // not equal
        expect(sum(4, 5)).to.not.equal(7)
    })

    it('object equal', () => {
        expect({ a: 1 }).to.deep.equal({ a: 1 })
    })
})

describe('above least .. Test', () => {
    const arr = [1, 2, 3, 4]

    it('above test', () => {
        //arr 최대 값은 3보다 크다
        expect(Math.max(...arr)).to.above(3)
    })

    it('least test', () => {
        //arr 최대 값은 4보다 같거나 크다
        expect(Math.max(...arr)).to.least(4)
    })

    it('below test', () => {
        //arr 최소 값은 2보다 작다
        expect(Math.min(...arr)).to.below(2)
    })

    it('most test', () => {
        //arr 최소 값은 1보다 같거나 작다
        expect(Math.min(...arr)).to.most(1)
    })

    it('within test', () => {
        //arr.length는 3 와 5 사이의 값이다.(양 끝 값 포함)
        expect(arr.length).to.within(3, 5)
    })

    it('array length test', () => {
        expect(arr).to.have.lengthOf(4)
    })
})

describe('obj keys test', () => {
    const obj = { a: 1, b: 2 }

    it('keys test', () => {
        //obj는 a와 b를 key로 가진다.
        expect(obj).to.have.all.keys('a', 'b')
    })

    it('any keys test', () => {
        //obj는 a와 c중 하나를 key로 가진다.
        expect(obj).to.have.any.keys('a', 'c')
    })
})

describe('Arr include test', () => {
    const objs = [{ a: 1 }, { b: 2 }]

    it('include test', () => {
        //obj는 a와 b를 key로 가진다.
        expect([1, 2, 3]).to.include(1)
    })

    it('objs include test', () => {
        //obj는 a와 c중 하나를 key로 가진다.
        expect(objs).to.deep.include({ a: 1 })
    })
})

describe('Type test', () => {
    it('to be a or an test', () => {
        expect('foo').to.be.a('string')
        expect({ a: 1 }).to.be.an('object')
        expect(null).to.be.a('null')
        expect(undefined).to.be.an('undefined')
        expect(new Error()).to.be.an('error')
        expect(Promise.resolve()).to.be.a('promise')
        expect(new Float32Array()).to.be.a('float32array')
        expect(Symbol()).to.be.a('symbol')
    })
})
