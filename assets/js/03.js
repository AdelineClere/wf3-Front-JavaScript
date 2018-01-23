/* --------------------------------------
            LA CONCATENATION
---------------------------------------*/

var DebutDePhrase        = "Aujourd'hui ";
var DateDuJour           = new Date();
var SuiteDePhrase        = ", sont présents : ";
var NombreDeStagiaire   = 12;
var FinDePhrase          = " stagiaires.<br>";

/**
 * Nous souhaitons maintenant, grâce à la concaténation, afficher
 * tout ce petit monde en 1 seul morceau.
 */

 document.write(DebutDePhrase + DateDuJour.getDate() + "/" + 
 (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() 
 + SuiteDePhrase + NombreDeStagiaire + FinDePhrase);

 var phrase1    = "Je m'appelle ";
 var phrase2    = "Adeline et j'ai ";
 var age        = 47;
 var phrase3    = " ans !";

 document.write(phrase1 + phrase2 + age + phrase3);

