'use strict';


var osoba = {
    imie: 'Ola',
    wzrost: 175,
    przedstawOsobe: function() {
        console.log(this.imie);
    }
}

console.log(osoba.imie);
console.log(osoba['imie']);

osoba.przedstawOsobe();

osoba.nazwisko = 'Hannum';
console.log(osoba.nazwisko);

console.log(osoba);
