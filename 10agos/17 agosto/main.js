const calcular = () => { 
    const formulaInput = document.getElementById("formula").value;
    const arregloConNumeros = formulaInput.split("+")
    let total = 0;
    for (let indice = 0; indice < arregloConNumeros.length; indice++) {
        total = Number(arregloConNumeros[indice]) + total;
        
    }
    console.log(total)
    const resultadoDiv=document.getElementById("imprimir")
    resultadoDiv.innerHTML="el reaultado total"+ total
}


