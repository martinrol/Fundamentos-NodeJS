var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'otra'
    }
]

var tabla2 = ['a', 'b', 'c', 'd']

//console.table(tabla)

//---------------------
// console.group('Conversacion');
// console.log('Hola');
// console.log('Blablabla');
// console.log('Adios');
// console.groupEnd('Conversacion')

// console.log('Hola k ase')

function funcion1() {
    console.group('funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto es de la funcion 1')
    funcion2()
    console.log('Volvi a la primera carajo')
    console.groupEnd('funcion 1')
}

function funcion2() {
    console.group('funcion 2')
    console.log('Estoy en la 2')
    console.groupEnd('funcion 2')
}

console.log('Empezamos')
funcion1()

// -----------

