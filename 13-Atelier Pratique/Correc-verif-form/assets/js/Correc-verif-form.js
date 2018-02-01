// Valider email cf. paulunde
var validateEmail = email => {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if(!valid) {
        return false; 
    } else {
        return true;
    }
}
// Valider tel avec les expressions régulières
var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    var valid = telReg.test(tel);

    if(!valid) {
        return false;
    } else {
        return true;
    }
}


// Initialiser jQuery
$(function() {

// Ecouter formulaire envoyé 
    $('#inscription').on('submit', e => {

        // Empêcher redirection HTML5 
        e.preventDefault();

        // Alertes erreurs 
        $('#inscription .has-error').removeClass('has-error');
        $('#inscription .text-danger').remove();

        // Déclarer les variables à vérif 
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');
        var sujet   = $('#sujet');
        var message = $('#message');

        // Vérifier chaque champ

            // 1. Vérifier Nom 
            if(nom.val().length === 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir votre nom</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

            // 2. Vérifier Prénom
            if(prenom.val().length === 0) {
                prenom.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir votre prénom</p>').appendTo(prenom.parent());
            } else {
                prenom.parent().addClass('has-success');
            }

            // 3. Vérifier Mail
            if(!validateEmail(email.val())) {
                email.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre adresse email</p>').appendTo(email.parent());
            } else {
                email.parent().addClass('has-success');
            }

            // 4. Vérifier Téléphone
            if(!validateTel(tel.val())) {
                tel.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
                    .appendTo(tel.parent());
            } else {
                tel.parent().addClass('has-success');
            }
            
            // 4. Vérifier Sujet
            if(sujet.val().length === 0) {
                sujet.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir un sujet</p>').appendTo(sujet.parent());
            } else {
                sujet.parent().addClass('has-success');
            }
            // 4. Vérifier Message
            if(message.val().length === 0) {
                message.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir votre message</p>').appendTo(message.parent());
            } else {
                message.parent().addClass('has-success');
            }


        // Vérifier si erreurs dans le formulaire
        if($('#inscription').find('.has-error').length === 0) {

            $('#inscription').replaceWith(`
                <div class="alert alert-success">
                    Votre message a bien été envoyé !
                </div>
            `);

        } else {

            $('#inscription').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure d'envoyer votre message. Vérifiez vos informations.
                </div>
            `);

        }

    });

});