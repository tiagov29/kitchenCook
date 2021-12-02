function crearContador() {
    let contador = 0;
    // se le llama closure porque contiene una referencia a una variable declarada en scope
    // de una funcion superior se genera un vinculo entre ellas
    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}

const contador1 = crearContador();

// Closure son las funciones anidadas que recuerdan el conjunto de variables a las que
//podian acceder, por mas que se las invoque desde otro lugar, desde otro scope.

//Es importante tener presente el CONTEXTO DE EJECUCION, cuando js empieza a ejecutar
//el programa lo primero que hace es crear el contexto de ejecucion inicial para eso
//crea el primer registro de la pila de ejecucion un registro asociado a la funcion que
//engloba a todo el programa, el cual tiene dos fases, la fase de creacion donde se carga
// en memoria todo lo necesario para ejecutar esa funcion (nombre de archivo donde se ejecura
// la funcion, se coloca el puntero de la proxima linea a ejecutar, para el primer registro
// se crea el objeto global, en los navegadores es window, se pone el valor que va a tener
//this dentro de la funcion, en este caso es window por no estar en modo estrico )
// tambien se asocia el contexto de ejecucion que se esta creando con el codigo que se va
// a ejecutar en este caso nuestro script.
// Se crea un ENTORNO LEXICO que es un objeto que tienen los contextos de ejecucion donde
// se almacenan los nombres de las variables que existen dentro de una funcion y los valores
//actuales que tienen. Son como un diccionario de clave y valor

// cada ves que se ejecuta una funcion en javascript, se crea un nuevo contexto de ejecucion
// con un entorno lexico
// API de un objeto
// La interfaz que tiene un objeto para interactuar con el mismo. Que motodos podemos invocar
// sobre ese objeto y a que propiedades internas podemos acceder.

function crearContador(contador = 0) {
    return {
        incrementar: function() {
            contador = contador + 1;
            return contador;
        },
        decrementar: function() {
            contador = contador -1;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        }
    }
}

const contador3 = crearContador();
contador3.incrementar();
contador3.incrementar();
contador3.decrementar();
contador3.obtenerValor();

// las clausuras se crean para proteger las variables y para crear funciones.

// fabrica de mensajes
function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str) {
        console.log(`%c ${tipo}: ${str}`, estilos);
    }
}

const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');