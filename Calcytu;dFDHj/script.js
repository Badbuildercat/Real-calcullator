const plus = document.querySelector('.js-plus');
const multiply = document.querySelector('.js-multiply');
const minus = document.querySelector('.js-minus'); 
const divide =document.querySelector('.js-divide');
const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const answer = document.querySelector('.js-result');


const add = (number1, number2) => {
return number1 + number2
}
const minus1 = (number1, number2) => {
    return number1 - number2
}
const multiply1 = (number1, number2) =>  {
    return number1 * number2
}
const divide1 = (number1, number2) => {
    return number1 / number2
}

const clear = () => {
    input1.value = ""
input2.value = ""
}

plus.addEventListener('click', () => {
    answer.textContent =
    add(parseInt(input1.value),parseInt(input2.value))
    clear()
})

minus.addEventListener('click', () => {
    answer.textContent = minus1(parseInt(input1.value),parseInt(input2.value))
    clear()
})

multiply.addEventListener('click', () => {
    answer.textContent = multiply1(parseInt(input1.value),parseInt(input2.value))
    clear()
})

divide.addEventListener('click', () => {
    answer.textContent = divide1(parseInt(input1.value),parseInt(input2.value))
    clear()
})


