// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(function() {
        console.log('Esto no se va a ver nunca');
    }, 0)
});

setTimeout(function() {
    console.log('Esto no se va a ver nunca');
}, 0)

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar el error')
    setTimeout(function() {
        console.log('Esto viene desde las excepciones');
    }, 0)
});

functionnoExisto();

console.log('Si el error no se recoge, no sale')
