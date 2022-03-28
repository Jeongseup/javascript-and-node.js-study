/* == 자바스크립트 상속이해
 */
class Vehicle {
    constructor() {
        this.passengers = []
        console.log('Vehicle created')
    }
    addPassenger(person) {
        this.passengers.push(person)
    }
}

class Car extends Vehicle {
    constructor() {
        // 슈퍼클래스의 생성자를 호출하는 특별한 함수
        super()
        console.log('Car created')
    }
    deployAirbags() {
        console.log('BWOOSH!')
    }
}

const v = new Vehicle()
v.addPassenger('Judy')
console.log(v.passengers)

const c = new Car()
c.addPassenger('Alice')
console.log(c.passengers)

// =====================
// 자바스크립트 다형성, polymorphism 퐇폴리몰피즘?
// 객체지향 언어에서 여러 슈퍼클래의 멤버인 인스턴스를 가리키는 말
// =====================

class Motorcyle extends Vehicle {}

const car1 = new Car()
const moto1 = new Motorcyle()

console.log(car1 instanceof Car)
console.log(car1 instanceof Vehicle)
console.log(moto1 instanceof Vehicle)
console.log(moto1 instanceof Vehicle)

//객체 프로퍼티 나열 다시 보기?
class Super {
    constructor() {
        this.name = 'Super'
        this.isSuper = true
    }
}
Super.prototype.sneak = 'Not Recommended'

class Sub extends Super {
    constructor() {
        super()
        this.name = 'Sub'
        this.isSub = true
    }
}

const obj = new Sub()
console.log(obj)

for (let property in obj) {
    // prototype은 직접 이렇게 프로퍼티로 꺼낼 때 나옴
    // console.log(property)

    console.log(
        `${property} : ${obj[property]}` +
            // 해당 프로퍼티가 있으면 ''를 붙이고 없으면 inheried를 붙인다.
            (obj.hasOwnProperty(property) ? '' : '(inherited)')
    )
}

console.log(Object.keys(obj)) // 이렇게 출력해서 사용하면 protype 타입에 정의된 걸 생략해준다.
console.log(Sub.toString()) // 보통 이건 필요가 없어서 클래스 내에서 새롭게 override한다.

// 다중 상속 문제
// 다중 상속은 충돌 문제가 발생할 확률이 높다.
// 다른 언어에서는 지원하지 않고, interface란 개념을 도입해서 이를 대처한다.
// 자바스크립트는 흥미로운 방식으로 이런 것들을 절충해뒀다.
// 자바스크립트는 프로토타입 체인에서 여러 부모를 검색하지는 않으므로 단일 상속 언어라고 해야 하나
// 다중 상속이나 인터페이스 보다 나은 방법을 제공한다.?
// 대표적으로 필요한 경우가 mixin이다.

class InsurancePolicy {}

function makeInsurable(obj) {
    obj.addInsurancePolicy = function (p) {
        this.InsurancePolicy = p
    }

    obj.getInsurancePolicy = function () {
        return this.InsurancePolicy
    }

    obj.isInsured = function () {
        return !!this.InsurancePolicy
    }
}

console.log()
console.log(Car)
makeInsurable(Car)
console.log(Car)

// 만들고 난 뒤에 보면 해당 메서드가 잡히지 않는다..?
// 추상화된 개념은 보험에서 가입할 수 없기 때문
const car2 = new Car()
console.log(Object.keys(car2))
// car2.addInsurancePolicy(new InsurancePolicy()) // error

// 개별 자동차만이 가능함! 즉 클래스가 아닌 인스턴스를 넣어야 한다.
const car3 = new Car()
makeInsurable(car3)
car3.addInsurancePolicy(new InsurancePolicy()) // work
// 출력해보면 해당 메서드가 구현되어있다.
console.log(car3)
// 하지만 이렇게 된다면 모든 객체에서 해당 함수를 호출하여야 한다. -> 보일러 플레이트함

console.log()
// 해결방법. Class.prototype 지정
makeInsurable(Car.prototype)
const car4 = new Car()
car4.addInsurancePolicy(new InsurancePolicy()) // wroks

// 하지만 복잡한 비즈니스에선 이런 메서드들이 충돌할 여지가 있다.
// 이때 심볼을 이용한다면 문제를 일부 경감 가능하다.

class InsurancePolicyWithSymbol {}
// 프로퍼티를 심볼로 잡으면 항상 고유해진다.
const ADD_POLICY = Symbol()
const IS_INSURED = Symbol()
const _POLICY = Symbol()

function makeInsurableWithSymbol(obj) {
    obj[ADD_POLICY] = function (p) {
        this[_POLICY] = p
    }
}
