'use strict';

var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Gomuła',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'gotowanie'},
                {nazwa: 'sport'}
            ]
        },
{
            imie: 'Magda',
            nazwisko: 'Kowalska',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'gotowanie'}
            ]
        }
    ]
}

console.log(jsonOsoby.osoby[0].imie);

jsonOsoby.osoby.forEach(function(element, index) {
    console.log(element.imie);
});