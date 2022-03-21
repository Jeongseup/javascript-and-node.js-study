'use strict'

// es6기능 : 블록 스코프 변수 선언
const sentences = [{
    subject: 'JavaScript',
    verb: 'is',
    obejct: 'great'
}, {
    subject: 'TypeScript',
    verb: 'is',
    obejct: 'better'
}]

// es6 기능 : 객체 분해
function say({
    subject,
    verb,
    obejct
}) {
    // es6 기능 : 템플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱
    console.log(`${subject} ${verb} ${obejct}`)
}

// es6 기능 : for.. of
for (let s of sentences) {
    say(s)
}