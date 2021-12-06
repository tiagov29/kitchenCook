/** === Cuando comparamos valores primitivos, este nos dira si son
 * del mismo tipo y si tienen el mismo valor.
 * 
 * == Cuando ponemos esto en el codigo ocurre COERCION DE TIPOS, cuando
 * realizamos ciertas operaciones entre valores de distintos tipos, javascript
 * internamente convierte uno de ellos o ambos para que sean del mismo tipo
 * y pueda concretar la operacion.
 * 
 * con los objetos es mas delicado ya que al comparar objetos en realidad
 * estamos comparando referencias ( cualquier cosa que no sea un valor
 * primitivo).
 * 
 * === tambien es conocido como el OPERADOR DE INDENTIDAD, Cuando lo usamos
 * para comparar objetos, este nos dice si estamos hablando del mismo espacio
 * de memoria, del mismo objeto en la memoria.
 */

'2' === 2 // por ejemplo esta comparacion arrojaria falso
'hola' === 'adios' // tambien seria falso ya que apesar de ser el mismo tipo
//no tienen el mismo valor.

10 / '5' // por eso este tipo de opeacion daria 2 ya que javascript
//tomaria la decision de convertir el 5 a numero.
'2' == 2 // al igual que esto seria true.

{} === {} // incluso obajetos vacios, la igualdad sera falsa porque
//cada uno es almacenado a un lugar de memoria distino

[1,2,3] === [1,2,3] // con los arrays sucede los mismo estan en lugares
// de memoria diferente

JSON.stringify(objeto1) === JSON.stringify(objeto2) // esta seria una manera
// de saber si dos objetos son iguales, transformandolos a string eso si los
//atributos estan en el mismo orden, de lo contrario no funcionara

// otra opcion es usar LO libreria co esta function  _.esEqual
// va por el objeto validando sus propiedades de manera recursiva