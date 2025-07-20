const os = require("os")
// console.log(os);
const user = os.userInfo();
console.log(user);
console.log("Uptime: " + os.uptime() + " seconds");

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs);


