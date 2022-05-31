//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
let inputFirstNumber = document.getElementById('firstNumber');
let inputSecondNumber = document.getElementById('secondNumber');
let btnValidate = document.getElementById('btn-validate');
let commonDividers = document.getElementById('commonDividers');

function division(){

btnValidate.addEventListener ("click", function () {
console.log ('Probando');
    let n1 = inputFirstNumber.value;
    let n2 = inputSecondNumber.value
    let i = 1;
    for (i = 1; i <= n1; i++) 
    {
        if (n1 % i === 0 && n2 % i === 0)  { console.log ( i + " es un divisor común de " + n1 + ' y de ' + n2) }
    }

});
}

division();