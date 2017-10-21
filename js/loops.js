'use strict';

/* pętla for */

for (var i = 10; i > 0; i--) {
    console.log(i);
}

/* pętla forEach */

var imiona = ['Wojtek', 'Krystian', 'Ola'];

imiona.forEach(function (element, index) {
    console.log('Element z indexem: ' +index + 'ma wartość ' + element);
});


/* pętla while */

var it = 0;
while(it < 10) {
    console.log('It: ' + it);
    it++;
}

/* pętla do while - pętla wykonuje się zawsze przynajmniej raz bo warunek zakończenia sprawdzany po wykonaniu kodu*/

var j = 0;
do {
    console.log('Pętla do...while: ' +j);
    j++;
} while (j < 10)
    
    /* przerwanie break */
    
    var a = 0;
while(a <10) {
    console.log('break: ' + a);
    a++;
    if(a == 5) {
        break;
    }
}

/* przerwanie-continue */

for(var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    
    console.log('continue: ' + i);
    
}

for(var i = 0; i <3; i ++) {
    for(var j = 0; j <4; j++) {
        console.log(i + ',' + j);
    }
}