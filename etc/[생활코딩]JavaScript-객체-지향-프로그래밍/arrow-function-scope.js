// 상속의 사용방법

const o = {
    name: 'Jeongseup',
    speak: function () {
        return `My name is ${this.name}`
    }
}

console.log(o.speak())

// this가 o에 묶인 이유는 speak이 o의 프로퍼티여서가 아니라,
// o에서 speak을 호출했기 때문이다.
const speak = o.speak
console.log(speak === o.speak)

console.log(speak())

kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second
    },
    // 이거 근데 왜?
    sum2() {
        return this.first + this.second
    },
    // arrow function은 this를 다른 변수와 마찬가지로 lexically하게 묶어버린다.
    // 이 말은 즉슨 이전의
    sum3: function () {
        // const self = this
        console.log(this)

        const sum = () => this.first + this.second
        return sum()
    }
}

// console.log('kim.sum()', kim.sum())
// console.log('kim.sum2()', kim.sum2())
console.log('kim.sum3()', kim.sum3())
