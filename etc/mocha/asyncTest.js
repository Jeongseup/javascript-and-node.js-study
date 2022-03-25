/* == 비동기 테스트
자바스크립 코드는 거의 비동기적으로 작동한다.
mocha를 이용하면 이런 비동기 테스트도 간단하게 할 수 있다.
*/

const assert = require('assert')

describe('비동기 테스트', () => {
    // it의 callback으로 done을 사용하면 자동으로 비동기 테스트로 인식된다.
    // done은 단일 테스트 내 한번만 호출되어야 한다.
    // 비동기 테스트는 2초과 경과되면 자동으로 실패된다.
    it('here is asynchronous test', function (done) {
        // 기본 비동기 테스트 시간이 2초이기 때문에 늘려줘야 한다.
        // 단일 테스트의 제한 시간 설정
        // 단! 이때 =>와 같은 애로우 함수를 사용할 수 없게된다.
        // 애로우 함수는 this를 lexically 처리하기 때문에 스코프가 안 잡히기 때문
        // this.timeout(5000)
        setTimeout(done, 3000)
    })
})
