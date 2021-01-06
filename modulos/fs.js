const fs = require('fs').promises;

async function leer() {
    const file = await fs.readFile('./archivo.txt', { encoding: 'utf8' } )
    console.log(file);
}
leer()

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());
    })
}
leer(__dirname + '/archivo.txt', console.log);


function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (error) {
        if(error) {
            cb('No he podido escribirlo', error);
        } else {
            cb('Se ha escribo correctamente');
        }
    })
}
escribir(__dirname + '/archivo1.txt', ['Estoy agregando algo'], console.log)

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}
borrar(__dirname + '/archivo.txt1', console.log)