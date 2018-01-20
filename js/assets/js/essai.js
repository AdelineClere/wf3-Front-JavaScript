var AnnuaireDesStagiaires = [
    { prenom : "Hugo",      nom : "LIEGEARD",   tel: "0783 97 15 15" },
    { prenom : "Adeline",   nom : "CLERE",      tel: "XXXX XX XX XX" },
    { prenom : "John",      nom : "GARCIA",     tel: "XXXX XX XX XX" },
];

/**
 * Le fait d'avoir des objets dans un tableau indexé ; nous avons
 * mis en place le format JSON
 */

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);
console.log(AnnuaireDesStagiaires[0].nom);
console.log(AnnuaireDesStagiaires[0].tel);

console.log(AnnuaireDesStagiaires[1].prenom);
console.log(AnnuaireDesStagiaires[1].nom);
console.log(AnnuaireDesStagiaires[1].tel);

console.log(AnnuaireDesStagiaires[2].prenom);
console.log(AnnuaireDesStagiaires[2].nom);
console.log(AnnuaireDesStagiaires[2].tel);




var listeDePrenoms  = ["Jonathan", "Hana", "Arnaud"]; 
var listeDeNoms     = ["CHEMLA", "MATTEI", "VALETTE"];
var listeDeTel      = [ 0624585265, 0645875495, 0645123298]

var AnnuaireDesStagiaires = [ listeDePrenoms, listeDeNoms, listeDeTel ];
console.log( AnnuaireDesStagiaires[0][0]) 
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[1][0]);
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[2][0]);
console.log( ' ' );
console.log( AnnuaireDesStagiaires [0][1]) 
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[1][1]);
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[2][1]);
console.log( ' ' );
console.log( AnnuaireDesStagiaires[0][2]);
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[1][2]);
console.log( ' ' );              
console.log( AnnuaireDesStagiaires[2][2]);