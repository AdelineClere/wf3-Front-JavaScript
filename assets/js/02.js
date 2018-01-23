//  -- Déclarer un TABLEAU Numérique Indexé (= avec des index)
var monTableau = [];
var myArray = new Array;

monTableau[0] = "Adeline";
monTableau[1] = "Hugo;"
monTableau[2] = "Arnaud";

console.log(monTableau); // -- Affiche toutes les données
console.log(monTableau[0]); // -- Adeline
console.log(monTableau[2]); // -- Arnaud

var nosPrenoms = ["Hana", "John", 60, "Adnane", "Jonathan"]; // -- esp. pas necess si virgules
console.log(nosPrenoms);

//  -- Déclarer et affecter des Valeurs à un OBJET
// ⛔️ PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT ⛔️ !!!!!!!

var Coordonnee = {
    prenom  :   "Hugo",
    nom     :   "LIEGEARD",
    age     :   28
};

console.clear;
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

//  -- Je vais créer 2 tableaux numériques
var listeDePrenoms  = ["Hugo", "Rodrigue", "Kristie"]; // esp. pas obligatoire
var listeDeNoms     = ["LIEGEARD", "NOUEL", "SOUAKI"];

//  -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux
var Annuaire = [ listeDePrenoms, listeDeNoms ];

//  -- Afficher un Nom et un Prenom sur ma page html
document.write( Annuaire[0][1] )    // 0=annuaire en position 0 + Rodrigue en 1 
document.write( ' ' );              // pour faire 1 esp.
document.write( Annuaire[1][1] );

/*----------------------------------------------------------
|                      EXERICE
| Créer un tableau à 2 dimensions appelé "AnnuaireDesStagiaires" 
| qui contiendra toutes les coordonnées pour chaque stagiaire.
|
| Ex. Nom, Prénom, Tel
|
------------------------------------------------------------*/

var listeDePrenoms  = ["Jonathan", "Hana", "Arnaud"]; 
var listeDeNoms     = ["CHEMLA", "MATTEI", "VALETTE"];
var listeDeTel      = [ 0624585265, 0645875495, 0645123298]

var AnnuaireDesStagiaires = [ listeDePrenoms, listeDeNoms, listeDeTel ];
document.write( AnnuaireDesStagiaires[0][0]); 
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[1][0]);
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[2][0]);
document.write( ' ' );
document.write( AnnuaireDesStagiaires [0][1]); 
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[1][1]);
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[2][1]);
document.write( ' ' );
document.write( AnnuaireDesStagiaires[0][2]);
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[1][2]);
document.write( ' ' );              
document.write( AnnuaireDesStagiaires[2][2]);


// Meilleure méthode
var AnnuaireDesStagiaires = [
    { prenom : "Hugo",      nom : "LIEGEARD",    tel : "07 83 97 15 15" },
    { prenom : "Adeline",   nom : "CLERE",       tel : "07 83 97 15 15" },
    { prenom : "John",      nom : "GARCIA",      tel : "07 83 97 15 15" },
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);
console.log(AnnuaireDesStagiaires[1].prenom);

/**
* Le fait d'avoir des objets dans 1 tableau indexé ; nous avons
* mis en place le format JSON 
*/

/*--------------------------------------------
|              AJOUTER UN ELEMENT
---------------------------------------------*/

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

//  -- Si je souhaite ajouter un élément dans mon tableau
//  -- Je fais appel à la fonction push() qui me renvoi le nb d'éléments.
console.clear();
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push('Orange'); // Pas obligé de mettre la var
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/* NB : La fonction  unshift() permet d'ajouter un ou plusieurs éléments 
en début de tableau

/*--------------------------------------------
|       RECUPERER ET SORTIR LE DERNIER ELEMENT
---------------------------------------------*/

//  La fonction pop() me permet de supprimer un ou plusieurs éléments de montableau et d'en récupérer la valeur. Je peux accessoirement récupérer cette valeur dans une variable.

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

//  -- La même chose est possible avec le 1er élémenty en utilisant la fonction shift();
//  -- NB : La fonction splice() vous permet de faire sortir un ou plusiseurs élément sde votre tableau