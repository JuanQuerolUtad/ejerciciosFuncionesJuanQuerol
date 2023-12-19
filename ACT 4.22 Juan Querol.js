//Crea una función que indique si un número pasado por parámetro es múltiplode 10

function multiplo10(numero) {
    if (numero%10==0) {
        console.log(`${numero} es multiplo de 10`)
    }else{
        console.log(`${numero} no es multiplo de 10`)
    }
}
multiplo10(30);
multiplo10(5);