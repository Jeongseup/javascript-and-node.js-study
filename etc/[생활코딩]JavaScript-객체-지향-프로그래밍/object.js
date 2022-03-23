let memberArray = ['seup', 'brandy', 'jason']

console.log(`memberArray[2] : ${memberArray[2]}`)

let memberObject = {
    manager: 'seup',
    developer: 'brandy',
    designer: 'jason'
}

memberObject.designer = 'Jason'

console.log(`memberObject.designer : ${memberObject.designer}`)
console.log(`memberObject['designer'] : ${memberObject['designer']}`)

delete memberObject.manager

console.log(`delete memberObject.manger : ${memberObject.manger}`)
