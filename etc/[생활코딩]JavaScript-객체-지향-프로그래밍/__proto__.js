/*
== 자바스크립트 OOP ==
> 자바스크립트의 현재 OOP를 지원하지만
> 자바스크립트에서의 OOP는 다른 언어의 OOP와 다르다.
> 프로토타입 링크와 프로토타입 오브젝트란 개념이 존재한다.
*/

let superObj = { superVal: 'super' }
let subObj = { subVal: 'sub' }

// __proto__는 가급적 쓰지 않는 것이 좋으나 실험을 위해 설정
// 프로토타입 링킹
subObj.__proto__ = superObj

// 자바스크립트에서 객체의 속성을 찾는 순서
// 먼저 자기 객체 내 속성을 찾는다.
console.log(`subObj.subVal : ${subObj.subVal}`)
// 없다면 링킹된 __proto__를 뒤져서 찾는다.
console.log(`subObj.superVal : ${subObj.superVal} \n`)

// __proto__의 속성같은 경우는 keys에서 바로 보이지 않는다.
console.log(`subObj keys : ${Object.keys(subObj)}`)
console.log(`subObj : ${subObj} \n`)

subObj.superVal = 'sub2'
console.log(`subObj.superVal : ${subObj.superVal}`)
console.log(`superObj.superVal : ${superObj.superVal}`)
