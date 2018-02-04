// Initialiser jQuery
$(function() {

// Ecouter formulaire envoyé 
    $('#formulaire').on('submit', e => {

        // Empêcher redirection HTML5 
        e.preventDefault();

        // Alertes erreurs 
        $('#formulaire .has-error').removeClass('has-error');
        $('#formulaire .text-danger').remove();          

        // Déclarer les variables à vérif 
        var nom     = $('#inlineFormCustomSelect');
        var message = $('#message');  
      
    /*
        // 1. Vérifier qu'un Nom est choisi dans menu déroulant MARCHE PAS !!!
        if (!$(inlineFormCustomSelect option:selected).length) {
        $(inlineFormCustomSelect option[value='5']).attr('selected', 'selected');
        } else {
            message.parent().addClass('has-success');
        }
    */
        // Vérifier si Message > 15 caract
        if(message.val().length < 15) {
            message.parent().addClass('has-error');
            $('<p class="text-danger">Veuillez saisir votre message</p>').appendTo(message.parent());
        } else {
            message.parent().addClass('has-success');
        }

        // Vérifier si erreurs dans le formulaire
        if($('#formulaire').find('.has-error').length === 0) {

            $('#formulaire').replaceWith(`
                <div class="alert alert-success">
                    Votre message a bien été envoyé !
                </div>
           `);

        } else {

            $('#formulaire').prepend(`
                <div class="alert alert-danger">
                    Veuillez choisir un nom et rédiger votre message.
                </div>
            `);

        }


    });

});