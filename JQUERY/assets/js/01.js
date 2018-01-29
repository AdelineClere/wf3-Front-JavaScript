/* ----------------------------------------------------
           LA DISPONIBILITE DU DOM

    A partir du moment où mon DOM càd l'ensemble 
    de l'arborescence de ma pg html est complètement
    chargé ; je peux commencer à utiliser jQuery.
    
    Je vais mettre mon code dans 1 fonction,
    cette fonction sera appelée AUTOMATIQUEMENT !!! par
    jQuery lorsque le DOM sera entièrement défini.

    (Rq ⚠️ rappel = les scripts sont chargés à la fin) 


    3 façons de faire :
--------------------------------------------------------*/

    // -- 1ère possibilité
    jQuery(document).ready(function() {
        // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS...
    });

    // -- 2è possibilité
    $(document).ready(function() { // -- $ est signe que jQuery !
    });

    // -- 3è possibilité
    $(function() {
        // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS...
    });


    // -- 4 mais pas utiliser ! : fonction fléchée, pour les supers developpeurs et navigateurs récents
    $(() => {
        alert('Bienvenue dans le cours jQuery !');

        // -- En JS :
      //  document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

        // -- JQ
        // -- En jQuery, les sélecteurs sont les mêmes qu'en CSS !!!
        $('#TexteEnJquery').html('Mon Texte en JQ');
    });