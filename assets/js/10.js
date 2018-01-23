/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais : 4,
            math     : 6,
            physique : 18
        }
    },
    {
        prenom  : "Maxime",
        nom     : "JOYES",
        moyenne : {
            francais : 4,
            math     : 5,
            physique : 12,
            svt      : 15
        }
    },
    {
        prenom  : "John",
        nom     : "GARCIA",
        moyenne : {
            francais : 4,
            math     : 13,
            physique : 12,
            espagnol : 19
        }
    },
    {
        prenom  : "Hana",
        nom     : "MATTEI",
        moyenne : {
            francais : 14,
            math     : 13,
            physique : 13,
            anglais  : 16
        }
    }
];

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

// -- Je souhaite afficher la liste des etudiants (et comme c'est 1 tableau on fait une boucle)
w('<ol>')
for(let i = 0 ; i < PremierTrimestre.length ; i++) {

    // -- On récupère l'Objet Etudiant de l'Itération (= boucle)
    let Etudiant = PremierTrimestre[i];
    // l(Etudiant)

    var NombreDeMatiere = 0, SommeDesNotes = 0; // Dans la boucle for pour remettre à 0 à chaq etudiant suivant

        w('<li>');
            w(Etudiant.prenom + ' ' + Etudiant.nom);
            w('<ul>');
                for(let matiere in Etudiant.moyenne) { // -- On déclare matière ici et sa boucle à parcourir
                    // l(matière);

                    NombreDeMatiere++; // --> liste chaque matière à chaque tour
                    SommeDesNotes += Etudiant.moyenne[matiere]; // 

                    w('<li>');
                        w(matiere + ' : ' + Etudiant.moyenne[matiere]);
                    w('</li>');

                } // -- Fin de la boucle matière

                w('<li>');
                    w('<strong>Moyenne Générale : </strong>' 
                    + ( SommeDesNotes / NombreDeMatiere).toFixed(2) );
                w('</li>');

            w('</ul>');
        w('</li><br>');
}
w('</ol>');






/* Me
console.log(PremierTrimestre);

var moyenneGénérale = parsInt(moyenne);
totalNotes = français + math + physique + espagnol + anglais + svt;
console.log(totalNotes);
moyenneGénérale = totalNotes / moyenne;

var i = 0
while(i < moyenne.lenght) {
    console.log(moyenne[i]);
}

console.log(PremierTrimestre[0].prenom, PremierTrimestre[0].nom),
console.log(PremierTrimestre[0].moyenne),
console.log(moyenneGénérale),
console.log(PremierTrimestre[1].prenom, PremierTrimestre[1].nom),
console.log(PremierTrimestre[0].moyenne),
console.log(PremierTrimestre[2].prenom, PremierTrimestre[2].nom),
console.log(PremierTrimestre[0].moyenne),
console.log(PremierTrimestre[3].prenom, PremierTrimestre[3].nom),
console.log(PremierTrimestre[0].moyenne)
*/


/*
document.write ( 
    <ol>
    <li>PremierTrimestre[0].prenom, PremierTrimestre[0].nom</li>,
    <li>PremierTrimestre[1].prenom, PremierTrimestre[1].nom</li>,
    <li>PremierTrimestre[2].prenom, PremierTrimestre[2].nom</li>,
    <li>PremierTrimestre[3].prenom, PremierTrimestre[3].nom</li>,
    <ol> 
    );
  */




/* 
var Etudiants = [
   { prenom : "Carole",    nom : "Martin",     Français : "12",    Math : "13",    Physique : "15",   Economie : "16",   Anglais : "13", Espagnol :"11" },
    { prenom : "Eric",      nom : "Durand",     Français : "14",    Math : "13",    Economie : "16",   Anglais : "Espagnol" },
    { prenom : "Julien",    nom : "Tardi",      Français : "16",    Math : "13",    Physique : "15",   Economie : "16",   Anglais : "13" },
    { prenom : "Alix",      nom : "Beaulieu",   Français : "10",    Math : "13",    Physique : "15",   Economie : "16",   Espagnol :"11" },
    { prenom : "Margot",    nom : "Leman",      Français : "11",    Math : "13",    Physique : "15",   Anglais : "13", Espagnol :"11" },
]

var Matières = ["Français", "Math", "Physique", "Economie", "Anglais", "Espagnol"]

var moyennesEtudiants = [
    { prenom    :
        nom     :
    }
]
*/