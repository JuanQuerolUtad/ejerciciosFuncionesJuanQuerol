/**
 * Desarrolla una función que si un reciba pasado por parámetro un númeroindique si es primo o no.
 */

function esPrimo(numero){
    let cont = 0;
    for (let index = 1; index < numero+1; index++) {
        if(numero%index==0){
            cont++;
        }
        
    }
    if (cont==2) {
        return `${numero} es primo`
    }else{
        return `${numero} no es primo`
    }
}
console.log(esPrimo(1))
console.log(esPrimo(10))
console.log(esPrimo(23))
