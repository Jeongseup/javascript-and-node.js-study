// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)
console.log(process.verison)

setInterval(() => {
    console.log('hello seup')
}, 1000)
