// tipado dinamico: las variables no tienen un tipo de dato particular asociado.
// podemos asignarle y re-asignarle cualquier valor a cualquier variable.
// Tipado debil: podemos realizar operaciones entre valores de distintos tipos.
// coercion de tipos: conversion implicita de tipos que realiza el motor de javascript
// para poder concretar una operacion.
// el tipo de una variable se determina cuando se ejecute la linea de codigo que contiene
// a esa variable. Depende de la operacion que se este realizando con ella.
// PROPIEDADES DE LOS DATOS PRIMITIVOS
// -un dato primitivo no posee ni metodos ni propiedades
// -son inmutables.
let variable = "tipo";
typeof variable //aqui deberia arrojar el tipo de la variable, en este caso string
// TIPOS DE DATOS PRIMITIVOS : - String - null - number - undefined - boolean - symbol - bigint
// si no es de alguno de estos tipos es un objeto (arrays, funciones...)
//IEEE 754 formato para representar los numeros en javascript. Cada numero ocupa 64 bits en
// memoria (8 bytes).
let numero = (0.1 + 0.2).toFixed(2);// con toFixed especificamos la cantidad de digitos que
//queremos siento el resultado decimal
Number.isSafeInteger()//adentro podemos el numero que queremos verificar si es seguro o no hacer
//operaciones
//NaN es de tipo number y es el resultado de computos invalidos.
// Valores falsos : '', null, unidefined y NaN.

// Null es el tipo de dato para representar la ausencia de valor. Sirve para decir que una
//una variable no contiene nada, esta vacia o que todavia no conocemos su valor.
 !!numero;//para convertir cualquier valor a boolean
//objeto temporal OBJECT WRAPPER objeto que envuelve a un valor primitivo cuando queremos
//acceder a una propiedad o llamar a un metodo del mismo, solo se usa por una fraccion de
//segundo.

//Undefined = tipo de dato desconocido, se debe dejar para que el motor de javascript asgine
//automaticamente. si queremos decir que esta vacia es mejor usar null.
// undefined quiere decir que no se le dio ningun valor, no se recibio ese parametro, una
//funcion se termino de ejecutar hasta el final sin devolver ningun valor.
// aunque typeof null devuelva object, null es un tipo de dato primitivo esto es un bus que
// ya es demasiado tarde para corregirse

let s1 = Symbol('descripcion'); // tipo de dato unico e irrepetible
let s2 = Symbol.for('descripcion');//registro global de simbolos, para usarlo usamos symbol.for y la
//descripcion
let s3 = Symbol.keyFor(s2) //nos arrojara la descripcion que lo describe

// usos symbol

const DIRECCIONES = {
    IZQUIERDA: Symbol('IZQUIERDA'),
    DERECHA: Symbol('DERECHA'),
    ARRIBA: Symbol('ARRIBA'),
    ABAJO: Symbol('ABAJO')
}

// bigint
let numeroGrande = 609700000000000000000003n;
let numeroGrande2 = BigInt('340000000000000000034');