//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
let phrase = document.getElementById('phrase');
let usersPhrase = document.getElementById('usersPhrase')
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById ('usersPhrase')

function countingA() {


    btnValidate.addEventListener("click", function () {
        let valuePhrase = phrase.value
        let vowela = /[aá]/gi;
        let counting = valuePhrase.match(vowela).length;
        console.log(counting);
        result.innerHTML=('Hay ' + counting + ' letras a')

    })
}

countingA();