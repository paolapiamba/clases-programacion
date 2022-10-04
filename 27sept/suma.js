const numbers = [1, 20, 19, 29, 67, 28, 90]

let index = 0
let sum = 0
do {
    sum += numbers[index]//sum = sum + numbers[index]
    index++ // = index + 1
    console.log(sum)
    index++
} while (index < numbers.length)
console.log("el total es: ", sum)