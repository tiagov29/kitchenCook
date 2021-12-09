/**el scope es lo que le da significado a las variables y determina el conjunto de variables
 * que podemos acceder desde una linea de codigo
 * scope lexico (lexical scope)
 * El scope de cada variable se determina leyendo el codigo del programa, sin ejecutarlo.
 * Contexto: el valor que tiene la variable this en algun momento de la ejecucion. Cual es el
 * objeto que esta ejecutando una funcion.
 * scope (contexto de ejecucion o entorno)
 * 
 * Scope global : las variables globales pueden ser accedidas desde cualquier lugar de nuestro
 * programa.
 * 
 * Scope local : las variables locales solo se pueden acceder desde una parte de nuestro programa.
 *  -scope de funcion: accesibles dentro de toda la funcion, pero no fuera de la misma.
 *   variables declaradas con var
 *  -scope de bloque: toda porcion de codigo que esta encerrada entre llaves: {}
 *  solo se podran acceder dentro de todo el bloque, pero no fuera del mismo.
 *  variables declaradas con let o const.
 * nota: como buena practica debemos buscar declarar las variables en el scope mas reducido posible.
 * scopechain: javascript va a ir buscando una variable desde el scope mas cercano hasta el global.
 * 
 * Ocultamiento de variables (variable shadowing)
 * se produce  cuando una variable que esta en un scope mas reducido tiene el mismo nombre que otra
 * que esta en un scope superior siguiendo su cadena de scopes.
 */