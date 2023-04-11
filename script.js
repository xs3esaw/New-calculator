const input1 = document.querySelector('.js-teksts1');
const input2 = document.querySelector('.js-teksts2');
const plusButton = document.querySelector('.js-plus');
const minusButton = document.querySelector('.js-minus');
const multiplyButton = document.querySelector('.js-multiply');
const divideButton = document.querySelector('.js-divide');
const result = document.querySelector('.js-result');

const Add = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) + Number(skaitlis2)
}

const Subtract = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) - Number(skaitlis2)
}

const Multiply = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) * Number(skaitlis2)
}

const Divide = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) / Number(skaitlis2)
}

plusButton.addEventListener('click', () => {
    result.innerHTML = Add(input1.value, input2.value)

    input1.value = ""
    input2.value = ""
})

minusButton.addEventListener('click', ()=> {
    result.innerHTML = Subtract(input1.value, input2.value)

    input1.value = ""
    input2.value = ""
})

multiplyButton.addEventListener('click', ()=> {
    result.innerHTML = Subtract(input1.value, input2.value)

    input1.value = ""
    input2.value = ""
})

divideButton.addEventListener('click', ()=> {
    result.innerHTML = Subtract(input1.value, input2.value)

    input1.value = ""
    input2.value = ""
})





