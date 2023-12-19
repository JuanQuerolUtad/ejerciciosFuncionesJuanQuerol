/*
 Crea una función que recibe pasado por parámetro un Array (3x3)
  ymodifique todos sus miembros a 0 excepto en la diagonal que va de izquierda a derecha yde arriba hacia abajo
*/


let arrayDiagonal = new Array(3)

for (let i = 0; i < arrayDiagonal.length; i++) {
    arrayDiagonal[i]= new Array(3)
        
}
diagonal(arrayDiagonal);
function diagonal(array){
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(i==j){
                array[i][j] = 1;
            }else{
                array[i][j] = 0;
            }
            
        }
        
    }
    console.log(array)
    
}