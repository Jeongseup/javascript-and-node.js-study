class Person {
    constructor(name, first, second) {
        this.name = name
        this.first = first
        this.second = second
    }

    sum() {
        return this.first + this.second
    }
    /* 
    이와 같다. 
    Person.prototype.sum = function () {
        return this.first + this.second
    }
    */
}

let kim = new Person('kim', 20, 10)
let lee = new Person('lee', 10, 10)

console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())

kim.sum = function () {
    return 'new sum!'
}

console.log('kim.sum()', kim.sum())

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        // 부모클래스의 생성자
        super(name, first, second)
        this.third = third
    }
    sum() {
        // 부모클래싀 sum()을 호출하고 추가로 third를 더함
        return super.sum() + this.third
    }

    avg() {
        return (this.first + this.second + this.third) / 3
    }
}

let plusKim = new PersonPlus('kim', 20, 10, 30)

console.log('plusKim.sum()', plusKim.sum())
console.log('plusKim.avg()', plusKim.avg())
