function berekenInhoud(lengte, hoogte, diepte) {
    return lengte * hoogte * diepte;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);

//------------

function berekenCilinderInhoud(straal, hoogte) {
    const radius = straal / 2;
    const pi = Math.PI;
    return Math.pow(radius, 2) * pi * hoogte;
}

let cilinderInhoud = berekenCilinderInhoud(20, 5);
console.log(cilinderInhoud); 

//------------

function berekenHypotenusa(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

let langeZijde = berekenHypotenusa(8, 4);
console.log(langeZijde);

//------------

function gemiddeld(a, b, c, d, e, f, g) {
    return ( a + b + c + d + e + f + g) / 7; 
}
console.log(gemiddeld(10, 20, 30, 40, 50, 60, 70));
