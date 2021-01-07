const os = require('os');


// Architecture
console.log(os.arch());


// Platform
console.log(os.platform());


// Core
console.log(os.cpus());
console.log(os.cpus().length);


// Errors
console.log(os.constants)


// Memory
const SIZE = 1024;
function kb (bytes) { return bytes / SIZE };
function mb (bytes) { return kb(bytes) / SIZE };
function gb (bytes) { return mb(bytes) / SIZE };

console.log('bytes: ' + os.freemem());
console.log('kb:' + kb(os.freemem()));
console.log('mb:' + mb(os.freemem()));
console.log('gb:' + gb(os.freemem()));

console.log('Total Memory:' + gb(os.totalmem()));


// Directories
console.log(os.homedir());

// Directory for temporal files
console.log(os.tmpdir());


// Hostname of a server
console.log(os.hostname());


// Actived Network interfaces right now
console.log(os.networkInterfaces());