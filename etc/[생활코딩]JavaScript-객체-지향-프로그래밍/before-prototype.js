function Person(name, first, second, third) {
    this.name = name
    this.first = first
    this.second = second
    // from : simple function
    // to : prototype
    this.sum = function () {
        return this.first + this.second
    }
}

// prototype 이 필요한 이유
// > 아래와 같이 객체가 생성될 때 마다 함수(sum)이 새롭게 만들어지고 있다.
// > 컴퓨터 메모리가 낭비되고 있다. 만약 1억개의 object를 만든다면 1억 개의 함수가 새롭게 만들어져야 한다.
var kim = new Person('kim', 10, 20)
// 수정의 불리함
// > 아래와 같이 함수를 수정해야 하는 경우 일일이 모든 객체를 변경시켜줘야 한다.
/*
kim.sum = function () {
    return 'modified' + (this.first + this.second)
}
*/
var lee = new Person('lee', 10, 10)
console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())
