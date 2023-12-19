/**
 *  Crea una función que reciba como mínimo cuatro números pasados porparámetros y devuelva: suma los de todos,
 *  media aritmética de todos, producto delprimero y el ultimo, división entre el segundo y el penúltimo.
 */

function operaciones(num1, num2, num3, num4, num5 =0, num6=0){
    let suma = num1 + num2 + num3 + num4 + num5 + num6;
    let producto, division, media;
    if (num5==0) {
        producto = num1 * num4;
        division = num1 * num4;
        media = (num1 + num2 + num3 + num4) / 4;
    }else if(num6!=0){
        producto = num1 * num6;
        division = num1 * num6;
        media = (num1 + num2 + num3 + num4 +num5 +num6) / 6;
    }
    else{
        producto = num1 * num5 ;
        division = num1 * num5 ;
        media = (num1 + num2 + num3 + num4 +num5 ) / 5;
    }
    
    console.log(suma);
    console.log(producto);
    console.log(division);
    console.log(media);
    

}
operaciones(50,30,2,1)
