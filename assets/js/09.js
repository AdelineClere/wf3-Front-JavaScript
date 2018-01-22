/* ------------------------------------------------------------------------
|               LES OPERATEURS DE COMPARAISON
|-------------------------------------------------------------------------
|
|   L'opérateur de comparaison " == " signifie : Egal à.
|   Il permet de vérifier que 2 variables sont identiques.
|   
|   L'opérateur de comparaison " === " signifie : Strictement égal à. 
|   Il va comparzere la valeur et le type (2 string ou 2  nb ac même valeur)
|
|   L'opérateur de comparaison " != " :Différent de.
|   L'opérateur de comparaison " !== " : Strictement différent de.
|
-------------------------------------------------------------------------------*/


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.

        Rq = JAMAIS dire si l'erreur est dans l'email ou mdp !!!
------------------------------------------------------------------------------ */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp  = "wf3";



// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// // -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
// if(emailUser === email) {
//     // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

//     // -- 2a1. On demande a l'utilisateur son mot de passe
//     var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

//     // -- 2a2. Vérification du mot de passe
//     if(mdpUser === mdp) {
//         alert('Bienvenue !');
//     } else {
//         alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
//     }

// } else {
//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
// }

// -- Exemple avec les Fonctions

function monUtilisateurEstCorrect(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

if(monUtilisateurEstCorrect(emailUser,mdpUser)) {
    alert('Bienvenue ' + emailUser);
} else {
   alert('ATTENTION, email/mot de passe incorrect.');
}


/* ------------------------------------------------------------------
|               LES OPERATEURS LOGIQUES
|--------------------------------------------------------------------
|
|              L'opérateur  ET : && ou AND 
|
|   Si la comparaison email user et email correspond, ET 
|   la combinaison mdpuser et mdp correspond.
|
|   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT
|   correspondrent pour être validée
|   Ex. if(emailUser == email && mdpUser == mdp) {....}
|
--------------------------------------------------------------------
|
|              L'opérateur  OU : || ou OR
| 
|   Si la combinaison emailUser et email correspond ET/OU 
|   la combinaison mdpUser et mdp correspond.

|   --> Dans cette condition, au moins l'une des 2 doit OBLIGATOIREMENT
|   correspondre pour être validée.
|   Ex. if(emailUser == email || mdpUser == mdp) {....}
|
--------------------------------------------------------------------
|
|              L'opérateur  " ! " ou encore NOT
| 
|   L'opérateur "!" signifie LE CONTRAIRE DE... OU NOT
|Ex:
|   var monUtilisateurEstApprouve = true;
|   if(!monUtilisateurEstApprouve) {....}
|   --> Mon utilisateur n'est pas approuvé.
|
|   Reviens à écrire :
|   if(monUtilisateurEstApprouve = false) {....}
|
---------------------------------------------------------------------*/