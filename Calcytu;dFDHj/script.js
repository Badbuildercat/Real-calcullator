const plusins = document.querySelector('.js-plus');
const inputins = document.querySelector('.js-input');
const add = (number1, number2) => {
return number1 + number2
}
const minus = (number1, number2) => {
    return number1 - number2
}
const multiply = (number1, number2) =>  {
    return number1 * number2
}
const divide = (number1, number2) => {
    return number1 / number2
}

console.log(plusins)
console.log(inputins)
console.log(add(2,3))
plusins.addEventListener('click', () => {
    console.log("mani klape")
})