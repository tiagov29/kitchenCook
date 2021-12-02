let fruta = 'banana'; // contenedor fruta que guarda el valor banana
let fruta2 = fruta; // se crea una copia del valor de fruta y se guarda en el contenedor fruta 2

fruta = 'mandarina'; // asignando un nuevo valor al contenedor fruta ahora mandarina
fruta2 // por consola saldria banana en este contenedor

// cuando se refiere a objeto se habla de un objeto literial, un array o una funcion.

HEAP//memoria dinamica, es el area destinada para almacenar objetos. es mucho mas grande
// que donde se almacenan las variables con valores primitivos pero tambien es mucho mas
// lento su acceso

let fruta = {
    nombre: 'banana',
    cantidad: 4
}
//javascript va a asignarle un espacio vacio que encuentre en el heap, recordando en que
//direccion en memoria se puso, guardando esa referencia dentro de la variable
let fruta2 = fruta//se debe tener cuidado con esto puesto que en fruta2 se creara una copia
// de fruta y alli se tendra la referencia a la misma direccion, si modificamos un atributo
// en cualquiera de las dos variables, se vera reflejada en ambas.

function comer(cantidad) {
    cantidad = cantidad -1;
}

let cantidad = 4;

comer(cantidad)

// de esta manera el parametro recibiria 4, aunque se modifique el valor cantidad dentro de la funcion
//afuera cantidad seguira siendo 4


function comer(fruta) {
    fruta.cantidad = fruta.cantidad -1;
}

let fruta = {
    nombre: 'banana',
    cantidad: 4
};

comer(fruta)

//pero si ahora se usan objetos en vez de valores primitivos vamos a estar pasando objetos
//como parametro es la referencia que apunta al objeto ahora ambas variables tienen la misma
// referencia asi al terminar de ejecutar la funcion quedara con el valor cantidad del objeto
// modificado.