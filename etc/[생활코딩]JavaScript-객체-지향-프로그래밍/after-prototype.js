function Person(name, first, second, third) {
    this.name = name
    this.first = first
    this.second = second
}

// from : simple function
// to : prototype
Person.prototype.sum = function () {
    return this.first + this.second
}

// prototype 적용 후
// > prototype을 적용한다면 위와 같이 한 번의 함수만을 define 하면 된다.
// > 또한 수정할 때에도 편리하다
let kim = new Person('kim', 20, 10)
let lee = new Person('lee', 10, 10)

// 모든 객체의 함수가 한 번에 수정됨.
Person.prototype.sum = function () {
    return this.first + this.second + 3
}

console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())

// 추가로 특정 개체에 함수를 재정의 해주면 재정의된 함수를 실행해준다.
kim.sum = function () {
    return 'new sum!'
}

console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())
