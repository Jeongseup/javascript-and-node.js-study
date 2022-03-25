/* == only와 skip ==
only와 skip을 사용하면, 실행되어야하는 단일 테스트들을 선택 가능하다.
only를 사용하면, only를 사용한 단일 테스트만 실행된다.
*/

const assert = require('assert')

describe('[UNIT TEST] Only', function () {
    it('Test 1', () => {
        // 실행 안됨
        console.log(`I'm a Test 1`)
    })

    it.only('Test 2', () => {
        // 실행됨
        console.log(`I'm a Test 2`)
    })

    it('Test 3', () => {
        // 실행 안됨
        console.log(`I'm a Test 3`)
    })
})

describe('[UNIT TEST] Skip', function () {
    it('Test 1', () => {
        // 실행 안됨
        console.log(`I'm a Test 1`)
    })

    it.skip('Test 2', () => {
        // 실행됨
        console.log(`I'm a Test 2`)
    })

    it('Test 3', () => {
        // 실행 안됨
        console.log(`I'm a Test 3`)
    })
})
