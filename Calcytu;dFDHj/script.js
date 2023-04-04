const plus = document.querySelector('.js-plus');
const multiply = document.querySelector('.js-multiply');
const minus = document.querySelector('.js-minus'); 
const divide =document.querySelector('.js-divide');
const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const answer = document.querySelector('.js-result');


let firstvalue = input1.value
let secondvalue = input2.value

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


plus.addEventListener('click', () => {
    console.log(add(firstvalue,secondvalue))
})
