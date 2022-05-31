//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let inputFirstNumber = document.getElementById('firstNumber');
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById('result');
let result2= document.getElementById('result2');
let result3= document.getElementById('result3');
let result5= document.getElementById('result5');
let result7= document.getElementById('result7');


function division() {
    btnValidate.addEventListener("click", function () {
        let n1 = inputFirstNumber.value;
        if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
            if (n1 % 2 === 0) {
             result2.innerHTML = ("Es divisible por 2");
        }
        if (n1 % 3 === 0) {
             result3.innerHTML = ("Es divisible por 3");
        }
        if (n1 % 5 === 0) {
           result5.innerHTML = ("Es divisible por 5");
        }
        if (n1 % 7 === 0) {
            return result7.innerHTML = ("Es divisible por 7");
        }
            
        }
        if (n1 % 2 !== 0 || n1 % 3 !== 0 || n1 % 5 !== 0 || n1 % 7 !== 0) {
            return result.innerHTML = ("No es divisible por 2, 3, 5 o 7");
        }
    })
}

division();






