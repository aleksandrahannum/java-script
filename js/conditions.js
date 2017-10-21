var wzrostMateusz = 190;
var wzrostOlgi = 190;

/* warunek if*/

if (wzrostOlgi < wzrostMateusz) {
    console.log('Olga jest niższa :)');
}


//warunek if else


if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
    
} else {
    console.log("Olga jest niższa");
}

//warunek if else if 

if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
    
} else if (wzrostOlgi == wzrostMateusz) {
    console.log('Olga jest tak wysoka jak mateusz');
} else {
    console.log('Olga jest niższa');
}

//warunek switch

var kolor = 'zielony';
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony': 
        console.log('Kolor zielony');
        break;
    case 'niebieski': 
        console.log('Kolor niebieski');
        break;
    default: 
        console.log('inny kolor');
        
        
}