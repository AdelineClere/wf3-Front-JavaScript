/* ------------------------------------------------
           LES SELECTEURS D'ENFANTS

-------------------------------------------------*/

$(function() {
    l = e => console.log(e)

    // -- Je souhaite sélectionner toutes les div de ma pg

    // -- Je souhaite sélectionner la balise header de ma page
    l($('nav'));

    // -- Je souhaite tous les éléments descendants directs (enfants) qui sont dans nav
    l($('nav').children());

    // -- Parmi ces descendants, uniquement les éléments "ul"
    l$('nav').children('ul'));

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'));  // children('li') ok aussi + d'autres...

    // -- Je souhaite récupérer uniquement le 2è élément de mes "li"
    l$('nav').find('li').eq(1));

    // -- Je souhaite connaître le voisin immédiat de ma "nav" ?
    l$('nav').next()):
    l$('nav').next().next()); // Le voisin du voisin...
    l$('nav').prev()); // -- Le voisin d'avant

    // -- Les parents
    l$('nav').parent());
})