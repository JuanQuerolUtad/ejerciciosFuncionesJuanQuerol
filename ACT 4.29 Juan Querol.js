/*
Crea una función que reciba un Array de 10 elementos,
 lo rellenealeatoriamente con números al azar entre 1 y 100 y
  los ordene por orden descendiente demayor a menor primero con los que terminan en 0.
*/ 

function ordenarArray(array) {
    
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 100) + 1;
    }
    const comparador = (a, b) => {
      if (a % 10 === 0 && b % 10 !== 0) {
        return -1;
      } else if (a % 10 !== 0 && b % 10 === 0) {
        return 1;
      } else {
        return b - a;
      }
    };
    array.sort(comparador);
  
    return array;
  }
let array1 = new Array(10);
console.log(ordenarArray(array1));