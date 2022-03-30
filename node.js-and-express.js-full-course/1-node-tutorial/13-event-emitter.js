const EventEmitter = require('events')

const customEmtter = new EventEmitter()

customEmtter.on('response', (name, id) => {
    console.log(`data recieved ${name} with id :${id}`)
})

customEmtter.on('response', () => {
    console.log(`some other logic here`)
})

customEmtter.emit('response', 'john', 34)
