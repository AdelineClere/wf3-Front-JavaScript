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
    // https://lodash.com/docs/4.17.4#debounce
    // https://stackoverflow.com/questions/15927371/what-does-debounce-do
    // https://www.grafikart.fr/tutoriels/javascript/debounce-throttle-642
    
    // $('#search').on('change', function(e) {  ou :
    $('#search').on( 'input', _.debounce(function(e) {

        // -- Je récupère la valeur saisie par mon utilisateur ⚠️ 
        let search  = $('#search').val();
        let regex   = new RegExp(search, 'i');

        // -- Vérification dans la console ⚠️ 
        // console.log(search);
        $('.resultat').slideUp();

        if(search.length > 0) {

            $.getJSON('https://jsonplaceholder.typicode.com/users', function(contacts) {
                
                // -- Je parviens bien à récupérer mes contacts
                // console.log(contacts);  

                // -- Je peux maintenant parcourir mes contacts
                // for(let i = 0 ; i < contacts.length ; i++) {

                //     let contact = contacts[i];
                //     // console.log(contact);

                //     /**
                //      * Je souhaite vérifier si un username saisie par l'utilisateur
                //      * correspond à une valeur string de mon "contact"
                // //      */
                //     if(contact.username === search || contact.name === search 
                //         || contact.email === search || contact.phone === search) {
                // OU
                // if(regex.test(contact.email) || regex.test(contact.name)) {
        

                //         console.log(contact.username + ' a été trouvé !');
                //         break;

                //     } // endif
                    
                // } // endfor

                // -- Je filtre mon tableau de "contacts" pour ne garder que ceux pour lesquel je trouve une correspondance ⚠️
                let resultat = _.filter(contacts, contact => {
                    return regex.test(contact.username) || regex.test(contact.email)
                        || regex.test(contact.phone) || regex.test(contact.name);
                });

                // console.log(resultat);
                // -- Je vide mes résultats avant d'afficher les nouveaux  ⚠️
                // -- De cette façon j'évite d'additionner toutes mes recherches
                $('.resultat').empty();

                _.forEach(resultat, contact => {

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

                }) // ()endforEach

                $('.resultat').unmark().mark(search);
                $('.resultat').slideDown();

            }); // $.getJSON

        } // endif search > 0

    }, 500 )); // .on('change') ._debounce()

}); // $(function())




// function(contacts) {   <=>   contacts => {   


/*--------------------------------------------------------------
                    DECLARATION DES FONCTIONS
-------------------------------------------------------------- 

function leContactEstTrouve(Contact) {

    // -- Booleen qui indique la présence du contact saisi dans le flux  
    let estTrouve = false;

    // -- On parcourt le tableau à la recherche d'une correspondance
    for(let i = 0 ; i <fluxContacts.length ; i++) {

        if(Contact.search === fluxContacts[i].email) {
            // -- Si une correspondance est trouvé "estPresent" passe à true
            estTrouve = true;
            // -- On arrête la boucle, on a trouvé. 
            break;
        }
    }

    // -- On retourne le booleen
    return estTrouve;
}


/* --------------------------------------------------------------
                 TRAITEMENT DU FORMULAIRE
-------------------------------------------------------------- 

    // -- 1. J'écoute la soumission de mon formulaire  
    $('#search').on('change', function(e) {
*/   

/*
    // -- 2. Récupérer le flux de contacts
    $.ajax('https://jsonplaceholder.typicode.com/users').done(function(fluxContacts) {
        console.log(fluxContacts);

          
           // -- 3. Je cherche la correspondance avec la fonction leContactEstTrouve
            if(!leContactEstTrouve(Contact)) {
                alert('ATTENTION\nCe contact n\'est pas présent !')
                
            } else {
                // -- 4. Afficher sur la page le contact trouvé
                $(`
                    <div class="membre">
                        <div class="membre_informations">
                            <p>Nom Complet : ${fluxContacts.name}</p>
                            <p>Username : ${fluxContacts.username}</p>
                            <p>Email : ${fluxContacts.email}</p>
                            <p>Téléphone : ${fluxContacts.phone}</p>
                        </div>
                    </div>
          
                `).appendTo($('form.parent'));
            };
 */