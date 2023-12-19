/*
Crea una función que recibe pasado por parámetro dos Arrays (4x4)
númericos y devuelva un tercer Array lleno de ceros excepto en aquellas posiciones en lasque los dos primeros Arrays tengan los mismos valores numéricos.
*/ 

function iguales(array1, array2){
    let array3= new Array(4);
    for (let i = 0; i < array3.length; i++) {
        array3[i]= new Array(4)
        
    }
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            if (array1[i][j]==array2[i][j]) {
                array3[i][j]=array1[i][j]
            }else{
                array3[i][j]=0
            }
        }
        
    }
    return array3
}
let array1= new Array(4);
let array2= new Array(4);

for (let l = 0; l < array1.length; l++) {
    array1[l]= new Array(4);
    array2[l]= new Array(4);
    for (let k = 0; k < array1[l].length; k++) {
        array1[l][k]= Math.ceil(Math.random()*10)
        array2[l][k]= Math.ceil(Math.random()*10)
    }
    
}
console.log(array1);
console.log(array2);
console.log(iguales(array1, array2));