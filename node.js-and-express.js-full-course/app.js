// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')

// ipmort 할 떄 대체명을 사용할 수 있다
const data = require('./6-alternative-flavor')
// export 하지 않아도 코드가 전부 실행된다
require('./7-mind-grenade')

console.log(data)

// sayHi(names['john'])
// sayHi(names.peter)
