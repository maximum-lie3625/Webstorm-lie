const john = 'john'
const peter = 'peter'

const sayHI = (name) => {
    console.log(`hello there ${name}`)
}
require('./module1')
sayHI('susan')
sayHI(john)
sayHI(peter)
