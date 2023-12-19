// Programa una función que determine si un año pasado por parámetro es bisiesto

function bisiesto(ano){
    if (ano%4==0) {
        console.log(`${ano} es año bisiesto`);
    }else{
        console.log(`${ano} no es año bisiesto`);
    }
}
bisiesto(2004);
bisiesto(2024);
bisiesto(2023);
bisiesto(2020);