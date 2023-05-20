const os= require('os')

const user= os.userInfo()
console.log(user)

//method returns the system uptime in second

console.log(`The system uptime is ${os.uptime()} secpmd`)

const currentOs={
    name:os.type(),
    reslease:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)