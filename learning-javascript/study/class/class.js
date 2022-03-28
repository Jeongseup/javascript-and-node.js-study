/* == 자바스크립트 객체지향 프로그래밍 ==
OOP는 1950년부터 있던 개념이다. 
시뮬러와 스몰토크라는 언어가 등장하면서 OOP의 형태가 갖춰졌다고 한다.
ES6 이전에는 자바스크립트에서 클래스를 만드는 건 꽤나 번거로운 일이었다. 
하지만 ES6에서 도입됨.
*/

class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.userGears = ['P', 'R', 'D']
        this.userGear = this.userGears[0]
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`Invali gear : ${gear}`)
        }
        this.userGear = gear
    }
}

const car1 = new Car('Tesla', 'Model S')
const car2 = new Car()
// =================================
// instance(객체)의 클래스를 확인

console.log('Is a car1 Car class? :', car1 instanceof Car)
console.log('Is a car2 instance in the Array Class? :', car2 instanceof Array)
// =================================

// 클래스 사용
console.log(car1.userGear)
car1.shift('D')
console.log(car1.userGear)

// =================================
// 자바스크립트 언어의 프로퍼티 접근성

// 대부분의 OOP 언어는 메서드와 프로퍼티 접근 visibitily 를 서정하는 것에 비해
// 자바스크립트에서는 그런 메커니즘이 없다.
// =================================
car1.userGear = 'X'
console.log(car1.userGear) // 강제로 대입

// =================================
// 프로퍼티 접근 보완
class ProtectedCar {
    constructor(make, model) {
        this.make = make
        this.model = model
        // _(underscore)는 프로퍼티를 보호를 어느정도 함
        this._userGears = ['P', 'R', 'D']
        this._userGear = this._userGears[0]
    }
    get userGear() {
        return this._userGear
    }
    set userGear(value) {
        if (this._userGears.indexOf(value) < 0) {
            throw new Error(`Invali gear : ${value}`)
        }
        this._userGear = value
    }
    shift(gear) {
        // set userGear을 호출하게 된다.
        this.userGear = gear
    }
}

console.log('')
const car3 = new ProtectedCar('Tesla', 'Model S')
console.log(car3.userGear)
car3.shift('D')
console.log(car3.userGear)
// set userGear 함수 내에서 error 발생
// car3.userGear = 'X'
// 그렇지만 이것도 _userGear로 접근하면 보호 불가
car3._userGear = 'X'
console.log(car3.userGear)
// 그렇다면 어떻게 해야할까? 완벽하게 보호하려면 WeakMap 인스턴스를 사용하면 가능
//
//
// =================================
// 자바스크립트 클래스는 사실 함수이다.

// ES6에서 class를 도입하기 전까지
// 클래스를 만든다는 것은 곧 클래스 생성자로 사용할 함수를 만든다는 의미였다.
// ES5의 클래스는 다음과 같다.
// =================================

function CarFunction(make, model) {
    this.make = make
    this.model = model
    this._userGears = ['P', 'D']
    this._userGear = this._userGears[0]
}
// class나 function 이나 typeof를 하면 둘 다 function타입이라고 나온다.
console.log(typeof CarFunction, typeof Car)

// =================================
// 자바스크립트 정적 메서드

// =================================
class StaticCar {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.vin = StaticCar.getNextVin()
    }
    // 이것도 아래에 선언하면 에러가 나나? 아님 자동으로 hoisting 되나?
    // 에러가 나지 않음 아마 호이스팅 해주는 거 같은데..?
    static getNextVin() {
        return StaticCar.nextVin++
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin
    }
}

StaticCar.nextVin = 0
const staticCar1 = new StaticCar('Te', 'S')
const staticCar2 = new StaticCar('Te', 'A')

console.log(staticCar1.vin)
console.log(staticCar2.vin)

console.log(StaticCar.areSame(staticCar1, staticCar2))
console.log(StaticCar.areSame(staticCar1, staticCar1))
