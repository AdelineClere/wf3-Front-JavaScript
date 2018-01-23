// ----------------------------------------
// -- LA BOUCLE FOR
// ----------------------------------------

for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');


// ----------------------------------------
// -- LA BOUCLE WHILE
// ----------------------------------------

var j = 1;
while(j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>')

    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++; 
}

/* ----------------------------------------
|               EXERCICE
|----------------------------------------*/

// -- Supposons que nous avons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/** 
* Grâce à une boucle for affichez la liste des prénoms
* du tableau ci-dessus dans la console, ou sur votre pg.
*/

console.log(Prenoms);
for(let i = 0 ; i < Prenoms.length ; i++) {
    console.log(Prenoms[i]);
}
console.log('------');

var j = 0;
while(j < Prenoms.lenght) {
    console.log(Prenoms[j]);
    j++;
}


// -----------------------------------------
// -- LA BOUCLE ForEach
// -- ATTENTION A LA PERFORMANCE !! (+ long)
// -----------------------------------------

Prenoms.forEach(affichePrenom); // affichePrenom = c'est une fonction un call-back

function affichePrenom(prenom, index) { // La fonction ForEach passe la valeur (prenom) et l'index
    console.log(prenom);
}

