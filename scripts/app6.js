//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
let phrase = document.getElementById('phrase');
let usersPhrase = document.getElementById('usersPhrase')
let btnValidate = document.getElementById('btn-validate');
let result = document.getElementById ('usersPhrase')

function countingVowels() {


    btnValidate.addEventListener("click", function () {
        let valuePhrase = phrase.value
        let vowels = /[aáeéiíoóuú]/gi;
        let counting = valuePhrase.match(vowels).length;
        console.log(counting);
        result.innerHTML=('Hay ' + counting + ' vocales')

    })
}

countingVowels();