//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
let inputFirstNumber = document.getElementById('firstNumber');
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById('result');

function division() {

    btnValidate.addEventListener("click", function () {
        console.log('Probando');
        let n1 = inputFirstNumber.value;
        if (n1 == 1 || n1 == 2) { return result.innerHTML= ('No es primo por defincion') }
        for (let i = 2; i < n1; i++) {
            if (n1 % i === 0) { return result.innerHTML= (n1 + " no es un número primo ") };
            if (n1 % i !== 0) { return result.innerHTML= (n1 + "es primo") }
        }
    }


    );
}

division();