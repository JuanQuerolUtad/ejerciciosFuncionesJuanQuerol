/* Crea una función que muestra la tabla de multiplicar de un número pasadopor parámetro en concreto del 1 al 10.
 Muestra todas las tablas de multiplicar del 1 al 10 después*/

function tablaMultiplicar(numero) {
    console.log(`La Tabla de Multiplicar de ${numero} `)
    for (let i = 0; i < 10; i++) {
        console.log(`| ${numero} X ${i+1} = ${numero * (i+1)}`)
        
    }
}
tablaMultiplicar(3)
tablaMultiplicar(10)
tablaMultiplicar(2)