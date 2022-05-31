//Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.clear
let inputFirstNumber = document.getElementById('firstNumber');
let inputSecondNumber = document.getElementById('secondNumber');
let btnValidate = document.getElementById('btn-validate');
let heighest = document.getElementById('heighest');

function calculate() {

    btnValidate.addEventListener("click", function () {
        let firstNumber =inputFirstNumber.value
        let secondNumber =inputSecondNumber.value

       let result = (Math.max(firstNumber, secondNumber))
        console.log(result);
        heighest.innerHTML = ('El número mayor es ' + result)


    })

}

calculate();