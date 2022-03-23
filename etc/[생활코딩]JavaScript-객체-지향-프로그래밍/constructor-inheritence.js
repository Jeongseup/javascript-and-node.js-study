/*
== 자바스크립트 생성자 함수 ==
> class와 동일함
*/
function Person(name, first, second) {
    this.name = name
    this.first = first
    this.second = second
}

Person.prototype.sum = function () {
    return this.first + this.second
}

function PersonPlus(name, first, second, third) {
    // 우리가 생성하려는 객체가 this
    // 처음엔 당연히 빈 객체
    // console.log(this) => {}
    Person.call(this, name, first, second)
    this.third = third
}

// PersonPlus.prototype.__proto__ = Person.prototype
// 위 보다 아래처럼 상속하는 것이 좋다.
PersonPlus.prototype = Object.create(Person.prototype)
PersonPlus.prototype.constructor = PersonPlus

// 위에서 Object.create하게 되면 함수가 replace되기 때문에.. 아래에 선언해야한다.
PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3
}

let kim = new PersonPlus('kim', 10, 20, 30)

console.log('kim.sum()', kim.sum())
console.log('kim.avg()', kim.avg())

console.log('kim.constructor', kim.constructor)
