//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let inputFirstNumber = document.getElementById('firstNumber');
let inputSecondNumber = document.getElementById('secondNumber');
let inputThirdNumber = document.getElementById('thirdNumber');
let btnValidate = document.getElementById('btn-validate');
let heighest = document.getElementById('heighest')

function calculate() {

    btnValidate.addEventListener("click", function () {
        let firstNumber =inputFirstNumber.value
        let secondNumber =inputSecondNumber.value
        let thirdNumber =inputThirdNumber.value

       let result = (Math.max(firstNumber, secondNumber,thirdNumber))
        console.log(result);
        heighest.innerHTML = ('El número mayor es ' + result)


    })

}

calculate();