const assert = require('assert')

/* 
== describe() ==
describe는 테스를 구분 짓고! 테스트에 대해 설명하는 함수로
주로 Object 명이나 function 명을 작성합니다. 
아래 코드처럼 describe안에 또 다른 describe를 중첩시킬 수도 있습니다.
*/

describe('Array Object', () => {
    console.log('first describe') // 무시
    describe('#indexOf()', () => {
        console.log('second describe') // 무시
        /*
    == it() ==
    it은 어떤 결과가 나와야 하는지 명시합니다.
    */
        it('배열 [1,2,3]의 4번째 인덱스를 호출하므로 -1 나와야 한다.', () => {
            // 기본적으로 제공하는 assert가 있긴 하나 다양하지 않아
            // chai 같은 외부 assertion을 사용함.
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
        console.log('here') // 어디에 console.log를 찍더라도 다 무시된다..
        it('should return 1 when the value is 2', () => {
            assert.equal([1, 2, 3].indexOf(2), 1)
        })
    })
})
