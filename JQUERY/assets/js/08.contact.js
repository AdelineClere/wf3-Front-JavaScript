/**
 * Validate email function with regular expression
 *
 * https://paulund.co.uk/regular-expression-to-validate-email-address
 * If email isn't valid then return false
 *
 * @param email
 * @return Boolean
 * = c'est une information simplement
 */

$(function() {
    l = e => console.log(e)

var validateEmail = email => {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if(!valid) {
        return false; 
    } else {
        return true;
    }
}

var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    var valid = telReg.test(tel);

    if(!valid) {
        return false;
    } else {
        return true;
    }
}

// -- Initialisation de jQuery
$(() => {

    // -- Ecouter quand est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
    $('#contact').on('submit', e => {

        // -- Neutraliser la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs (avec des classes Bootstrap ?)
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champ

        // -- 1. Vérification du Nom
        if(nom.val().length === 0) {
            nom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
        } else {
            nom.parent().addClass('has-success');
        }

        // -- 2. Vérification du Prénom
        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        // -- 3. Vérification du Mail
        if(!validateEmail(email.val())) {
            email.parent().addClass('has-error'); 
            $('<p class="text-danger">Vérifiez votre adresse email</p>').appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
        }

        // -- 4. Vérification du Numéro de Téléphone
        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
                .appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }
        
        // -- Dans le cas d'une boucle de vérification
        // let ChampsAVerifier = $('#contact input:not([type=submit])');
        // console.log(ChampsAVerifier);

        // for(let i = 0 ; i < ChampsAVerifier.length ; i++) {
        //     if( $(ChampsAVerifier).eq(i).val().length === 0 ) {
        //         ...
        //     }
        // }

        // -- Je vérifie si mon formulaire comporte des erreurs.
        if($('#contact').find('.has-error').length === 0) {

            $('#contact').replaceWith(`
                <div class="alert alert-success">
                    Votre demande a bien été envoyée !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);

        } else {

            $('#contact').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre
                    demande. Vérifiez vos informations.
                </div>
            `);
        }

       /* Je récupère toutes les coordonnées
        let nom    =$('#nom').val();
        let prenom =$('#prenom').val();
        let email  =$('#email').val();
        let tel    =$('#tel').val();
        l($('#nom'));
        l($('#prenom'));
        l($('#email'));
        l($('#tel'));*/


        // Je déclare la variable contact en Tableau pour pouvoir faire une boucle
        var obj = $( "li" );
        var arr = $.makeArray( obj );

        (typeof obj === "object" && obj.jquery ) === true;
        jQuery.isArray( arr ) === true;

        /*
        var contact = $('.contact');

        var contact = [];
        contact.push();
        console.log(contact)
*/
        jQuery(div).append(<table></table>);

    
        // J'écoute l'événement email + vérif qu'il ne soit pas dans la liste
        l($('#email', function () {
            l($(email));
        for(let i = 0; i != form-group.length; i++) {
            console.log(form-group[i]);  

            if(email === form-group[i].email) { 
                emailError.style.display = "block";    // On affiche "pseudoError"  
                submit.disabled = true;                // On désactive submit      
                Bienvenue.textContent = '';
                break;
            } else {
                emaiError.style.display = "none";
                submit.disabled = false;
            };
            };
        }));
        

        // On désactive 'aucuncontact'
        l($('.aucuncontact').display.block);


 /*       // Modifier le tableau = ajouter new contact
        <th>Nom</th><th>Prénom</th> <th>Email</th> <th>Téléphone</th>

.appendTo(table-striped.parent());*/



/*
        // On ajoute le contact au tableau
        var myArray = [];
        myArray.push(nom + prenom + email + tel).appendTo(LesContacts.parent());

        
 /*       if(!validateEmail(email.val())) {
            email.parent().addClass('has-error'); 
            $('<p class="text-danger">Vérifiez votre adresse email</p>').appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
*/
        

        /*        LesContacts.parent().addClass('newNom');
        $(newNom).add(' <p> nom + prenom + email + tel </p>').appendTo(LesContacts.parent());
*/       
        




    });
});

});