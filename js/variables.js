'use strict';

var wzrost = 175;
var wiek = 26;
var wiekOli = wiek;

console.log(wzrost);
console.log(wiek);
console.log(wiekOli);

function wyswietlZmienna() {
    var imie = 'Karolina';
    console.log(imie);
}

var wyswietlWiek = function() {
    console.log(wiek);
}

wyswietlZmienna();

wyswietlWiek();

function mnozenie(parametr1, parametr2,) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik: ' + wynik);
    
    return wynik;
}

mnozenie(2,3);
mnozenie(4,10);

var wynikMnozenia = mnozenie(3,5);
console.log('wynik mnożenia: ' + wynikMnozenia);
