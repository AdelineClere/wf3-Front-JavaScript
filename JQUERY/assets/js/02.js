/* --------------------------------------------
           LA SELECTEURS JQUERY
----------------------------------------------*/

// -- Format : $('selecteur');
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function() {
    // -- DOM READY !

    l = e => console.log(e);

    // -- Selectionner toutes les valises SPAN !
    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- Je veux sélectionner mon Menu grâce à son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // -- Je veux sélectionner une classe...
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // -- Sélectionner un Attribut
    l($('[href="https://www.google.fr"]'));

})
