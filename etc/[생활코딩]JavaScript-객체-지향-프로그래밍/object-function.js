/*
== 자바스크립트 함수 ==
> 자바스크립트에서는 함수도 객체이다.
> 기본적으로 모든 함수 객체는 call()이란 function을 갖는다.
*/
let kim = {
    name: 'kim',
    first: 10,
    second: 20
}

let lee = {
    name: 'lee',
    first: 10,
    second: 10
}

function sum() {
    return this.first + this.second
}

function sum2(prefix) {
    return prefix + (this.first + this.second)
}

// 정말 신기해 보이지만.. call로 객체를 호출함으로써 실행할 수 있게 된다.
// sum();
console.log('sum.call(kim)', sum.call(kim)) // apply
console.log('sum.call2(kim)', sum2.call(kim, '=> '))

// bind()
// 아예 한 함수를 특정 input과 객체로 묶어서 새로운 함수를 구현함
var kimSum = sum2.bind(kim, '-> ')
console.log(`kimSum() ${kimSum()}`)
