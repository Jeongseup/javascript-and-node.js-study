const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// The path.basename() method returns the last portion of a path
const base = path.basename(filePath)
console.log(base)

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// autoally add __dirname
const absolute = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolute)
