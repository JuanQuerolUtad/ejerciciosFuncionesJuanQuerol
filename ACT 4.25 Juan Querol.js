/*
Crea una función que devuelva la letra de un DNI pasado por parámetro sinRegExp. Con Arrays, Set, Maps?
 */

function letraDNI(dni){
    let arrayLetra = new Array()
    arrayLetra = dni.split('');
    console.log(`Letra del dni es ${arrayLetra[arrayLetra.length -1]}`)
    
}
letraDNI("50330321L");