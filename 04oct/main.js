const isAdult = (age) => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log(isAdult(10))

const logmessage = (age) => {

    if (isAdult(age)) {
        console.log("es mayor de edad")
    } else {
        console.log("es menor de edad")
    }
}

const transformAge = (age) => {//se transforma el mensaje}
    return Number(age)
}

const userAge = prompt("indicanos tu  edad")

logmessage (transformAge(userAge))












