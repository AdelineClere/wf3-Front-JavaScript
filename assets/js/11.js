/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, 
    vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];


// -- LesFlemards.js
function l(e) {
    console.log(e);
}
function w(f) {
    document.write(f);
}

// -- Déclaration de Variable
// -- EstCeQueLeMailEstDansLeTableau = faux;
var isEmailInArray = false;

// -- 1. Demander à l'utilisateur son email
var email   = prompt('Bonjour, Quel est votre email ?','<Saisissez votre email>');
var mdp     = prompt('votre mot de passe ?','<Saisissez votre mot de passe>');

// -- 2. Parcourir l'ensemble des données de mon tableau
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {

    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp ) {
        // -- J'ai trouvé une correspondance dans ma BDD
        isEmailInArray = true;
        w('Bonjour ' + BaseDeDonnees[i].prenom + ' !');

        // -- Je stop la boucle for, j'ai trouvé ce que je cherche...
        break;

    }
}

if(!isEmailInArray) {
    alert('ATTENTION, Email / Mot de Passe incorrect !');
}




/*

// Je demande à l'utilisateur ses prénom nom email mdp
var prenomUser = prompt("Bonjour, Quel est votre prenom ?","<Saisissez votre prenom>");
var nomUser = prompt("Bonjour, Quel est votre nom ?","<Saisissez votre nom>");
var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpUser = prompt("Votre mot de passe ?","<Saisissez votre mot de passe>");


// Je fais une boucle pour lire tous les users
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {
    let User = BaseDeDonnees[i];     // -- On récupère l'Objet User de l'Itération (= boucle)


    // Je crée une fonction pour vérifier les coord User
    function authentificationUser(prenomUser, nomUser, emailUser, mdpUser) {
        if(prenomUser === User.prenom && nomUser === User.nom && emailUser === User.email && mdpUser === User.mdp) {
            return true;
        } 
        else {
            return false;
        }
    }
    // Je publie ma reponse
    if(authentificationUser(prenomUser,nomUser,emailUser,mdpUser)) {
        alert('Bienvenue ' + prenomUser);
    } 
    else {
    alert('ATTENTION, authentification incorrecte.');
    }
}
*/