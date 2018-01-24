/*------------------------------------------------------------------
                         LES EVENEMENTS )

    Les événements vont me permettre de déclencher une fonction, càd 
    une série d'instructions ; suite à une action de mon utilisateur...

    OBJECTIF : être en mesure de capturer ces événements afin 
    d'exécuter une fonction.

    Les Evénements : MOUSE (souris)

        click       : au clic sur un élément
        mouseenter  : la souris passe au dessus de la zone d'un élément
        mouseleave  : la souris sors de cette zone

    Les Evénements KEYBOARD (clavier)

        keydown     : une touche du clavier est enfoncée ;
        keyup       : une touche du clavier a été relachée.

    Les Evénements WINDOW (Fenêtre)

        scroll      : défilement de la fenêtre ;
        resize      : redimensionnement de la fenêtre.

    Les Evénemenents FORM (Formulaire) 

        change      : pour les éléments <input>, <select>, <textarea> ;
        submit      : à l'envoi (soumission) du formulaire ;
        input       : pour capter la saisie d'un utilisateur sur un champ <input>



        |_> déclenchés par le navig, html, nous on doit savoir 
A QUEL MOMENT ILS SONT DECLENCHES pour mettre en place des actions :

####################### LES ECOUTEURS D'EVENEMENTS ###############################
                            addEventListener

    Pour attacher un événenemnt à un élément ou autrement dit,
    pour déclarer un écouteur d'événement qui se chargera de 
    déclencher une fonction je vais utiliser la syntaxe suivante :

/ -------------------------------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris.

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('click', changerLaCouleurEnRouge);



/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création du champ input
var input = document.createElement('input');
document.body.appendChild(p);

// -- Attribution d'un Attribut (pas obligé mais bien utile !)
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un Contenu...');

//-- Attribution d'un ID (mais ici sert à rien)
input.id = "MonID";

// -- Ajout dans la page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    console.log(input.value);
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);  