const grandes =[5.1, 4.7, 4,6, 4.4, 3.8, 3.7, 3.1, 2.9, 2.9, 2.7, 2.8]

const reduceFn =(acumulado,actual) =>{
    return acumulado + actual

}
const reduceHighesFn =(previo, actual) =>{
    if (previo > actual ){
        return previo 
    } else {
        return actual
    }
}

const reducelowestFn =(previo, actual) =>{

}

const highestGrandes = grandes.reduce(reduceHighesFn)
const lowestGrande = grandes.reduce (reducelowestFn)

console.log("el promedio del ofio de programacion fue:"+grandes.reduce(reduceFn) /
grandes.length)
console.log("la nota mas alta fue:" + highestGrandes)
console.log("la nota mas baja fue:"+ lowestGrande )





















