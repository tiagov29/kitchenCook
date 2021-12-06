/**Sistemas de tipos:  las reglas que impone un leguaje para clasificar
 * que tipos de valores existen, como podemos manipularlos y cuales son
 * las operaciones validas para realizar con ellos...
 * 1. chequeo de tipos : Es el proceso de verificar y hacer cumplir las
 * restricciones de tipos que existen en un lenguaje.
 * esto puede ocurrir antes de la ejecucion de un programa o durante la
 * ejecucion del mismo, en el caso de javascript es DURANTE. se le entrega
 * el programa a un motor que lo interpreta y linea a linea lo va a ejecutando  (verificando)
 * en los lenguajes compilados como java el chequeo es estatico.
 * 2. Exigencia de tipos: que tan exigente es un lenguaje para considerar que estamos cometiendo un error de tipos.
 *
 * 3. coercion de tipos: es la conversion implicita de tipos que realiza el motor de javascript para poder concretar
 * una operacion.
 *
 * para evitar que el programa decida por nosotros podemos usar las funciones String(), Number(), Boolean()
 * 4. equivalencia y campatibilidad de tipos : como un lenguaje determina que un tipo es compatible con otro tipo o
 * equivalente a otro tipo.
 *
 * para el cheque estatico Tipado Nominal: dos tipos son compatibles cuando tienen el mismo nombre o cuando es un subtipo del otro(por herencia)
 * Tipado Esctructural: Para que dos tipos sean compatibles solo basta con que compartan la estructura que nos interesa.
 *
 *para el chequedo dinamico  Duck Typing = no nos importa de que tipo es un objeto, siempre y cuando tenga los atributos y metodos a los
 * cuales queramos acceder.
 *
 * Los lenguajes dinamicos incentivan a mantener una documentacion actualizada y escribir muchos tests para asegurarnos
 * de que el codigo funciona como deberia antes de lanzar una nueva version de un programa.
 *
 *Typescript
 parte de la misma sintaxis que javascript, pero agrega un chequeo de tipos estructural antes de que se ejecute nuestro programa.
 */

2019 + '' //puedes convertir cualquier valor a string concatenandole un string vacio.
(2019).toString() // sino es null ni undefined podemos llamar el metodo toString.
let valor = true
valor.toString() //si esta en una variable se le puede llamar al metodo sobre la variable.

+'1234' //se puede convertir a Number anteponiendo un mas

let texto = 'hola';
!!texto //asi se transforma un valor a boolean con !!

''
0
null
undefined
NaN //todos son valores falsos