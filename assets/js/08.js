/* ---------------------------------------
             LES CONDITIONS
-----------------------------------------*/

var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR) {
    alert('Bienvenue !') 
}   
// -- Le else n'est pas obligatoire...
else {
    alert('google');
}

console.clear();


   
/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour demande son age.

function verifierAge(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande a l'utilisateur son age
var age = parseInt( prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>") );
    // Par défaut, prompt est un string

// -- 4. Vérification de l'age de l'utilisateur...
if(verifierAge(age)) {
    // -- 4a. J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet réservé pour les majeurs...");
    document.write('0_0 !!!');
}
else {
    // -- 4b. J'effectue une redirectionù
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}




/* MOI

var MajoriteLegaleFR = 18

    // Je demande à l'utilisateur son âge
    let age = prompt("Hello! Quel est ton âge?","<Saisir votre âge>");
    console.log(age);
    console.log(typeof age);

    // Je vérifie la condition
    if(age >= MajoriteLegaleFR) {
        alert('Bienvenue !') 
    }   
    else {
        let age = prompt("Vous n'êtes pas majeur");
        alert('google');
    }
*/