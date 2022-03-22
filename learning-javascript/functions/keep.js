// m 이상 n 이하의 무작위 정수를 반환합니다.
const rand = (m, n) => m + Math.floor((n - m + 1)) * Math.random()

// 배열 중 하나를 무작위로 반환합니다.
const randFace = (arr) => arr[rand(0, arr.length)]

// 소수점 숫자 비교 트릭
{
    let n = 0
    while (true) {
        n += 0.1;
        // 자바스크립트는 0.3을 0.30000000004 라 표현하므로 다음과 같이 나타내는 것이 좋다.
        if (Math.abs(n - 0.3) < Number.EPSILON) break;
    }

    console.log(`Stopped at ${n}`)
}

// 디폴트 객체 선언 트릭
{
    suppliedOption = "user input"
    const option = suppliedOption || {
        name: "Default"
    }
}

// this 키워드 올바른 예시
const obj1 = {
    name: "Jeongseup",
    greetBackwards: function () {
        const self = this;

        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackwards += self.name[i]
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
}

// this 키워드 올바른 예시2
const obj2 = {
    name: "Jeongseup",
    greetBackwards: function () {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i]
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
}

// min, max with array trick
const arr = [1, 2, 3, 5, -5]
Math.min.apply(null, arr) // -5
// Math.min(...arr)
Math.max.apply(null, arr) // 15
// Math.max(...arr)



// find를 이용해 검색 시 this 를 이용한 trick
arr.find(p => p.id === juliet.id);
arr.find(function (p) {
    return p.id === this.id
}, juliet);


// map 함수의 좋은 예시
const items = ["widget", "gadget"]
const prices = [10, 20]
const cart = items.map((x, i) => ({
    name: x,
    price: prices[i]
}))

// 객체 내 데이터 접근 안전한 방법
Object.keys(o).forEach(prop => console.log(o[prop]))