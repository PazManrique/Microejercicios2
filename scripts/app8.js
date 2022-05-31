//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let inputFirstNumber = document.getElementById('firstNumber');
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById('result');


function division() {
    btnValidate.addEventListener("click", function () {
        let n1 = inputFirstNumber.value;
        if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
            return result.innerHTML = ("Es divisible por 2, 3, 5 o 7");
        }
        if (n1 % 2 !== 0 || n1 % 3 !== 0 || n1 % 5 !== 0 || n1 % 7 !== 0) {
            return result.innerHTML = ("No es divisible por 2, 3, 5 o 7");
        }
    })
}

division();
