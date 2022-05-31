//Escribe un programa que pida un número y diga si es divisible por 2
let userNumber = document.getElementById('number');
let btnValidate = document.getElementById('btn-validate');
let result=document.getElementById('result')

function calculate() {

    btnValidate.addEventListener("click", function () {
        let a = userNumber.value;
        if (a % 2 === 0) {
            console.log(a + ' es divisible por dos');
            result.innerHTML = (a + ' es divisible por dos');

            return;
      
}
console.log (a + ' no es divisible por dos');
result.innerHTML = (a + ' no es divisible por dos'); })
}


calculate();