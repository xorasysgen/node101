const os= require('os');

//os information
console.log("OS: " + os.platform());

//os architechture
console.log("OP arch : " + os.arch());

// CPU info
console.log(os.cpus());

// free memory
console.log("free memory: " + os.freemem());

//total memory
console.log("total memory: " + os.totalmem());

// home dir
console.log("home dir" + os.homedir());

//up time
console.log("up time" + os.uptime()); // in sec