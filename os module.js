const os=require('os')
const  user = os.userInfo()
console.log(user)
console.log(`the uptime of this laptop is ${os.uptime()/60} seconds`)
const CURRENTOS = {
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(CURRENTOS)