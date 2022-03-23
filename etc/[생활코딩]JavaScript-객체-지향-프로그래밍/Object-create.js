/*
== 자바스크립트 Object create ==
> __proto__는 사실 표준 명세에 담기지 않는 내용이다.
> 하지만 브라우저나 node.js에서 지원하기 때문에 그냥 사용하는데
> 사용하지 않는 것이 좋다. 
> 그렇다면 이를 대체해서 어떻게 사용해야할까?
*/

let superObj = { superVal: 'super' }
let subObj = Object.create(superObj)
subObj.subVal = 'sub'

// 브라우저에서 켜면 자동으로 debugging mode가 적용된다.
debugger
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
console.log(`superObj.superVal : ${superObj.superVal} \n`)

// 상속의 사용방법
let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    // 객체 내 key, value 지정하듯이 지정
    sum: function () {
        return this.first + this.second
    }
}

// lee.__proto__ = kim
let lee = Object.create(kim)
lee.name = 'lee'
lee.first = 10
lee.second = 10
lee.avg = function () {
    return (this.first + this.second) / 2
}

console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())
console.log('lee.avg()', lee.avg())
