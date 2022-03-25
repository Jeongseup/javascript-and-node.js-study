/* == hooks ==
mocha는 기본적으로 before, after, beforeEach, afterEach 4개의 hook을 제공한다.
hook 들도 done을 제공하기 때문에 비동기 로직을 사용가능하다.
 */

const assert = require('assert')

describe('[UNIT TEST] Hooks test', function () {
    before(() => {
        // 블록 안의 첫 번째 테스트가 실행되기전에 단 한번 실행
        console.log('Here is before')
    })

    after(() => {
        // 블록 안의 테스트가 모두 끝난후 단 한번 실행
        console.log('Here is after')
    })
    beforeEach(() => {
        // 블록 안의 테스트들이 실행되기전 마다 실행
        console.log('Here is beforeEach')
    })

    afterEach(() => {
        // 블록 안에 테스트들이 끝날 때마다 실행
        console.log('Here is afterEach')
    })

    it('Test 1', () => {
        console.log(`I'm a Test 1`)
    })
    it('Test 2', () => {
        console.log(`I'm a Test 2`)
    })
})
