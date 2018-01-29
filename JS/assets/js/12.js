/*------------------------------------------------------------------
/                  LE DOM
/ -----------------------------------------------------------------------
| 
| Le DOM est une interface de développement en JS pour HTML. 
| Grâce au DOM, je vais être en mesure d'accèder / modifier mon HTML.
| 
| L'Objet ⚠️  "document" : c'est le point d'entrée vers mon contenu HTML.
|
| Chaque page chargée dans mon navigateur a un objet "document".
|
|------------------------------------------------------------------------


// -- Comment puis-je faire pour récupérer les différentes informations de ma page HTML ?


/*--------------------------------------------------------------------
|            ⚠️     document.getElementById
|---------------------------------------------------------------------
|
| permet de récupérer un élélment HTML à partir de son identifiant unique : ID ⚠️ 
|
|---------------------------------------------------------------------*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour)


/*--------------------------------------------------------------------
|            ⚠️      document.getElementsByClassName        !!! > On récup un tableau > Elt 0 !!!!
|---------------------------------------------------------------------
|
| permet de récupérer un élément (une liste) HTML à partir de leur classe ⚠️ 
|
|---------------------------------------------------------------------*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- ⚠️ Cette fonction me renvoie un tableau JS avec mes éléments HTML (Collection HTML). ⚠️



/*--------------------------------------------------------------------------
|             ⚠️     document.getElemenstByTagName        !!! > On récup un tablaeu > Elt 0 !!!!
|----------------------------------------------------------------------------
|
| document.getElementByTagName() est une fonction qui va permettre de  
| récupérer un ou plusieurs élélments HTML à partir de leur ⚠️  nom de balise ⚠️ 
|
|---------------------------------------------------------------------------*/

var span = document.getElementsByTagName('span');
console.log(span);