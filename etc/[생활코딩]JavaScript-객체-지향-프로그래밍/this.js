let son = {
    name: 'son',
    first: 10,
    second: 20,
    sum1: function (f, s) {
        return f + s
    },
    sum2: function () {
        return this.first + this.second
    }
}

console.log(son.sum1(son.first, son.second))
console.log(son.sum2())
