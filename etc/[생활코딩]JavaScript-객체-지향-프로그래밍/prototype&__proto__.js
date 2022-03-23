function Person(name, f, s) {
    this.name = name
    this.f = f
    this.s = s
}

Person.prototype.sum = function () {
    console.log(this)
    console.log(this.f + this.s)
    return 'here is sum'
}

let kim = new Person('kim', 10, 20)
let lee = new Person('lee', 10, 10)

console.log(kim.name)
console.log(kim.sum())
