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



___________________________________

Exo 4

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 4 - FINAL</title>
    <style>
        .pseudoError, .ageError {
            width: 200px;
            height: 20px;
            background-color: yellow;
            color: red;
            display: none;
        }
        .ageError {
            width: 360px;
        }
    </style>
    <!-- 
        CONSIGNE : 

Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.

---------

ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

---------

ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.

---------

ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
---------
  
  ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
  En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
      A. L'ajout de l'utilisateur dans le tableau.
      B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
      Ex. Merci Hugo ! Tu es maintenant inscrit.
      Voici la liste de nos Membres :
      
          Hugo : 26ans
          Rodrigue : 56ans
          ...
          
      NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.

    -->
</head>
<body>
    <h1>Formulaire d'inscription</h1>
    <h3 id="Bienvenue"></h3>
    <!-- Emmet : form>(input[type=text][id=$])*5 -->
    <form method="get" action="inscription.php" id="InscriptionForm">
        <input type="text"   id="pseudo"  placeholder="Choisissez un Pseudo"><br />
        <div class="pseudoError">Ce pseudo est déjà pris.</div><br />
        <input type="text" id="age" placeholder="Quel est votre Age ?"><br />
        <div class="ageError">Vous devez avoir au moins 18 ans pour vous inscrire.</div><br />
        <input type="email" id="email" placeholder="Quel est votre Email ?"><br /><br />
        <input type="password" id="mdp" placeholder="****"><br /><br />
        <input type="submit" id="submit" value="M'inscrire">
    </form>
    
    <script>
        var membres = [
          {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
          {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
          {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
          {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
        ];

        // -- Récupération des différents éléments
        var pseudo              = document.getElementById('pseudo');
        var age                 = document.getElementById('age');
        var email               = document.getElementById('email');
        var mdp                 = document.getElementById('mdp');
        var submit              = document.getElementById('submit');
        var Bienvenue           = document.getElementById('Bienvenue');
        var InscriptionForm     = document.getElementById('InscriptionForm');
        
        var pseudoError = document.getElementsByClassName('pseudoError')[0];
        var ageError    = document.getElementsByClassName('ageError')[0];
        
        // -- ETAPE 1 & 3

        pseudo.addEventListener('input', function () {
            // console.log(pseudo.value);
            for(let i = 0 ; i < membres.length ; i++) {
                // console.log(membres[i]);
                /**
                 * Si la saisie d'un pseudo en cours par mon utilisateur
                 * correspond à un pseudo dans mon tableau de membres...
                 * alors ma condition s'applique.
                 * NB : La condition vérifie la saisir de mon utilisateur
                 * pour tous les membres du tableau !
                 */
                if(pseudo.value === membres[i].pseudo) {
                    /**
                     * Si je trouve une correspondance, j'affiche l'alerte
                     * pseudoError, car le pseudo saisi par mon utilisateur
                     * existe déjà dans le tableau de membre.
                     */
                    pseudoError.style.display = "block";
                    submit.disabled = true;
                    Bienvenue.textContent = '';
                    break;
                } else {
                    pseudoError.style.display = "none";
                    submit.disabled = false;
                    Bienvenue.textContent = 'Bienvenue ' + pseudo.value + ' !';
                }
            }
        });

    </script>
    
</body>
</html>