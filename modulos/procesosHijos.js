const { exec, spawn } = require('child_process');
//const = require('child_process').exec;

exec('ls -l', (err, stdout, sterr) => {
    if(err) {
        console.error(err.message)
        return false;
    }

    console.log(stdout)
})

// let proceso = spawn('ls', ['-la']);

// console.log(proceso.pid)
// console.log(proceso.connected)

// proceso.stdout.on('data', function (dato) {
//     console.log('Esta muerto?')
//     console.log(process.killed)
//     console.log(dato.toString())
// })

// proceso.on('exit', function() {
//     console.log('El proceso terminó')
//     console.log(process.killed)
// })