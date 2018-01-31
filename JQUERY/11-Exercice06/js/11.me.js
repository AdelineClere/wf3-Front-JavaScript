/*
OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et 
d'afficher le détail de ses informations.

CONSIGNE :

    Un internaute doit pouvoir rechercher un contact sur la base de son Username, 
    Email, Phone ou Name
    
    Le résultat des contacts correspondant s'affiche ensuite dans une liste en dessous
    du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users 
    et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username, ...
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : 
    Nom, Prénom, Email, Téléphone.
    
    
*/
 
// -- Initialisation de jQuery
$(function() {

    // -- Je vais écouter l'évènement 'change' sur le champ input ⚠️ 
    $('#search').on('change', function(e) {

        // -- Je récupère la valeur saisie par mon utilisateur ⚠️ 
        let search  = $('#search').val();

        // -- Vérification dans la console ⚠️ 
        // console.log(search);
        $('.resultat').slideUp();

        if(search.length > 0) {

            $.getJSON('https://jsonplaceholder.typicode.com/users', function(contacts) {
                // console.log(contacts);  

                // -- Je peux maintenant parcourir mes contacts
                for(let i = 0 ; i < contacts.length ; i++) {

                let contact = contacts[i];
                console.log(contact);

                    //     /**
                    //      * Je vérifie si la saisie de l'utilisateur  ⚠️
                    //      * correspond à une valeur string ds mes "contacts"
                    // //      */
                    if(contact.username === search || contact.name === search 
                    || contact.email === search || contact.phone === search) {
            
                    console.log(contact.username + ' a été trouvé !');
                    break;

                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${ contact.name }</p>
                                <p>Username : ${ contact.username }</p>
                                <p>Email : ${ contact.email }</p>
                                <p>Téléphone : ${ contact.phone }</p>
                            </div>
                        </div>
                    `).appendTo($('.resultat'));


                    } // endif
                    
                } // endfor

                console.log(resultat);
                
                // -- Je vide mes résultats avant d'afficher les nouveaux  ⚠️
                // -- De cette façon j'évite d'additionner toutes mes recherches
                $('.resultat').empty();

              

                $('.resultat').unmark().mark(search);
                $('.resultat').slideDown();

            }); // $.getJSON

        } // endif search > 0
    });
});