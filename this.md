 this es un parametro especial que reciben las funciones
 preguntar quien es this o que valor tiene es preguntar que objeto esta tomando
 la funcion esta vez, es que contexto se esta ejecutando la funcion.
EL CONTEXTO es el objeto que esta ejecutando la funcion en un momento especifico. este seria el valor de this.
 el CONTEXTO DE EJECUCION tiene que ver con la pila de ejecucion.

 cada vez que javascript ejecuta un metodo o una funcion crea un CONTEXTO DE EJECUCION para
 esa ejecucion del metodo o de la funcion, cargando en memoria todo lo necesario para ejecutarla
 los parametros que recibe si es que recibe, el nombre del archivo al que pertenece,
 el numero de la proxima linea de codigo a ejecutar, tambien el scope y determina que valor tiene this
 para el momento de ejecutar la funcion.
```javascript
const harry = {
    nombre: 'Harry',
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}!`);
    }
};
```

```javascript
harry.saludar();
// si lo llamo asi aparecera el nombre Harry por consola pero
const saludar = harry.saludar;
// va a aparecer undefined
// si uso un boton para llamarlo tambien me aparecera undefined
const boton = document.getElementById('miBoton');
boton.addEventListener('click', harry.saludar);
harry.saludar();
// si lo llamo asi aparecera el nombre Harry por consola pero
const saludar = harry.saludar;
// va a aparecer undefined
// si uso un boton para llamarlo tambien me aparecera undefined
const boton = document.getElementById('miBoton');
boton.addEventListener('click', harry.saludar);
```


 para eevitar que el valor de this sea elegido por el programa y no por nosotros
 hacemos lo que se denomina en ingles Biding que es darle un valor a this.
 ## hay diferentes tipos

 5. Default binding (que es el que se asigna por defecto con una invocacion directa):
 Se da cuando se tiene una funcion normal, no una arrow function y la invocamos directamente. en las funciones sueltas como aqui this toma el objeto global que en los
 navegadores es window y en nodejs sera el objeto global pero con el 'use strict' this se le sera undefined ya que en este modo las funciones sueltas quedaran realmente sueltas.
 Nota: una buena practica es no usar this en las funciones globales porque no va a estar definido.

 ```javascript
 func`tion quienSoy() {
     console.log(`Hola, yo soy: `, this)
 }

 quienSoy();
 ```
 4. implicit Binding (invocacion de metodo)
 en esta invocacion de la funcion this tomara el valor de cada objeto que este a la izquierda del punto.
 ```javascript
 const santi = {
     nombre: "Santiago",
     saludar function () {
         console.log(`hola, mi nombre es ${this.nombre}`)
     },
     hermano: {
         nombre: "Sebastian",
         saludar: function (){
             console.log(`hola, yo soy su hermano, mi nombre es ${this.nombre}`)
         },
     },
 };

 santi.saludar();
 santi.hermano.saludar();
 ```
 como puedes observar en la linea 87 no aplica el implicit binding puesto que no hay nada en la parte izquierda de la declaracion de la funcion separado por un punto asi que se va
 al caso de declaracion por defecto que seria window pero como estamos usando el modo estricto este termina siendo undefined
 ```javascript
 'use strict'
 const santi= {
     nombre: 'santiago',
     twitter:  '@tiagov',
     saludar: function () {
         function seguimeEntwitter() {
             console.log(`sigueme en twitter: ${this.twitter}`);
         }

         console.log(`hola, mi nombre es ${this.nombre}!`)
         siguemeEnTwitter();
     }
 }
 ```

 para evitar esto se podria poner de esta manera:

  ```javascript
 'use strict'
 const santi= {
     nombre: 'santiago',
     twitter:  '@tiagov',
     saludar: function () {
         console.log(`hola, mi nombre es ${this.nombre}!`)
         this.siguemeEnTwitter();
     },

     seguimeEntwitter() {
        console.log(`sigueme en twitter: ${this.twitter}`);
     },
 }
 ```

 3. explicit Binding (enlazamiento explicito invocacion indirecta)
 llamar a la funcion con el metodo esta call function.prototype.call es un metodo que nos
 permite invocar una funcion cambiandole el contexto, el primer parametro que recibira sera
 el objeto que va a ser this y luego la lista de parametros que recibira la funcion, en este caso sera gritando y conDespedida
 santi.saludar.call(santi, true, true)

 tambien se puede usar apply(santi, [true,true]) a diferencia de call se le envia un array si ya esta el array armado desde antes puedes usar apply de lo contrario usa call, en el caso de usarla para que se ejecute cuando se oprima un boton estos metodos NO nos sirven porque los metodos se ejecutan al momento de ser escritos ellos no esperan a que el evento ocurra, en estos casos debemos usar BIND Function.prototype.bind es un metodo de las funciones que nos retorna una nueva funcion con el contexto enlazado al objeto que le digamos, sin ser ejecutada antes de que le hagamos click al boton

   ```javascript
 'use strict'
 const santi= {
     nombre: 'santiago',
     saludar: function () {
         console.log(`hola, mi nombre es ${this.nombre}!`)
     }
 };
 
 const boundSaludar = sacha.saludar.bind(sacha);
 ```

 nota : una funcion que fue creada con bind no puede volver a ser enlazada a otro objeto.

```javascript
 'use strict'
 const santi= {
     nombre: 'santiago',
     saludar: function (gritando, conDespedida) {
         const saludoNormal = `hola, mi nombre es ${this.nombre}!`
         const despedidaNormal = 'Adios';

         const saludo = gritando ?
            saludoNormal.toUpperCase() : saludoNormal;
         const despedida = gritando ?
         despedidaNormal.toUpperCase() : despedidaNormal;

         console.log(saludo);

         if(conDespedida){
             console.log(despedida);
         }
     }
 };
 ```
 2. New Binding (instanciar objetos)
 para instanciar objetos en javascript podemos instanciar funciones constructoras
 ```javascript
 function Persona(nombre) {
     this.nombre = nombre;
 }

 const santi = new Persona('Santi');
 ```
 o las clases de ES2015
 ```javascript
 class Persona {
     constructor(nombre) {
         this.nombre = nombre;
     }
 }

 const santi = new Persona('Santi');
 ```
 para ambos seria agregarle una constante declarando un nuevo objeto

 1. lexical Binding (arrow function)
 se produce cuando escribimos con funciones flechas

  ```javascript
 'use strict'
 const santi= {
     nombre: 'santiago',
     twitter:  '@tiagov',
     saludar: function () {
         const seguimeEntwitter = () => {
             console.log(`sigueme en twitter: ${this.twitter}`);
         }

         console.log(`hola, mi nombre es ${this.nombre}!`)
         siguemeEnTwitter();
     }
 }
 ```
para no usar bind se podria usar arrow function 
  ```javascript
 class Persona {
     constructor(nombre) {
         this.nombre = nombre;
     }

     saludar = () => {
         console.log(`Hola, mi nombre es ${this.nombre}`)
     }
 }

 const santi = new Persona('Santi');
 ```


 aqui el programa va a correr sin problema gracias a las arrow functions, ya que estas se ejecutan en el mismo contexto en que fueron creadas.

javascript va a ir checkeando cual aplicar del primero al quinto observando
- como fue escrita la funcion
- si la modificamos desde que la creamos
- el lugar de invocacion (call site)



