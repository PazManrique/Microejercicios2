//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
let phrase = document.getElementById('phrase');
let usersPhrase = document.getElementById('usersPhrase')
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById ('usersPhrase')

function countingVowels() {


    btnValidate.addEventListener("click", function () {
        let valuePhrase = phrase.value
        let expresion = /[aeiou]/gi;
        let arrayResult = valuePhrase.match(expresion);
        console.log(arrayResult);
        result.innerHTML = arrayResult
    })
}

countingVowels();