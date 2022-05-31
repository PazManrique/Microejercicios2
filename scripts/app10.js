//Escribir un programa que escriba en pantalla los divisores de un número dado
let inputFirstNumber = document.getElementById('firstNumber');
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById('result');

function division(){

btnValidate.addEventListener ("click", function () {
console.log ('Probando');
    let n1 = inputFirstNumber.value;
    let i = 1;
    for (i = 1; i <= n1; i++) 
    {
        if (n1 % i === 0) { console.log ("es divisible por " + i) }
    }

});
}

division();