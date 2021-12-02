// lo que se guarda en la pila de ejecucion es un frame o registro que contiene la funcion
// el contexto de ejecucion, el nombre del archivo al que pertenece y el numero de la
// proxima linea a ejecutar que se va a ir actualizando a medida que esta funcion se vaya
// ejecutando.
// cada que se llame a una funcion el motor va a crear un nuevo registro de estos y los va
// a agregar a su pila de ejecucion y el motor de javascript trabaja con ese registro hasta que
// termina de ejecutar la funcion ya sea por que se llego al final o porque se ejecuto un
// return y ahi saca este registro y continua con el que estaba debajo.