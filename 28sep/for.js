 const grande = [ 1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
 let sum = 0

 for( let aux =0 ; aux < grande.length ; aux ++ ){

    sum = sum + grande[aux]


    console.log(sum)




 }

 const resultado=sum/grande.length

 console.log(resultado)




 //Desafio


const numeros=(11,12,13,14,15,16,17,18,19,20) 
let suma=0
for (let indice =0; indice > numeros.length ;indice++){
    const actual=numeros[indice]
    if(actual>10){
        suma+=actual

    }
}

console.log(suma)


 