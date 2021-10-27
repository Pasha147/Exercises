//30:30 ос позволяет получать информацию по операционной ситсемме
const os = require("os");

console.log("OS>>", os.platform());
console.log("Архитектура проца>>", os.arch());
// console.log("Инфо про проц>>", os.cpus());
console.log("Free mem>>", os.freemem());
console.log("All mem>>", os.totalmem());
console.log("Home dir>>", os.homedir());
console.log("On time>>", os.uptime());
