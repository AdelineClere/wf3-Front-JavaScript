/**
 * Pour déclarer une class comme composant de notre application,
 * on importe "Component" via @Angular/core
 * (une variable créée ds AppComponent n'existe que dedans AppComp.)
 */
import { Component } from '@angular/core';
import { Contact } from './shared/models/contact';


/**
 * @component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 * (Il précise quels fichiers html et css sera appliqué)
 */
@Component({
  /** Le sélector détermine la manière dont
   * le composant sera affiché dans votre HTML.
   * On écrira dans notre html : <app-root></app-root>
   * vous devez avoir obligatoirement la balise d'ouverture
   * et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la partie visible du composant.
   * C'est ce qui s'affiche à l'écran lorsque le composant est utilisé.
   * (= on a déclaré l'import et on lui dit voici les fichiers html
   * et css qui sont liés, au fichier class dessous)
   */
  templateUrl: './app.component.html',
  // template: `
  //  <h1>Hello Truc !</h1>
  // `
  /**
   * La déclaration des styles avec "stylesUrls" ou "styles"
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du compsant mais aussi
 * son comportement. Dans le context MV VM, notre classe
 * correspond au ViewModel.
 */
  export class AppComponent {

  // -- Déclaration d'une variable titre
  title: string = 'Gestion de mes Contacts';

  // -- Contact choisi par mon utilisateur.
  contactActif: Contact;



  // -- Déclaration d'un objet Contact
  unContact: Contact = {
      id        : 1,
      name      : 'Adeline CLERE',
      username  : 'adelineclere',
      email     : 'wf3@hl-media.fr'
   };



  mesContacts: Contact[] = [
    {
      id        : 1,
      name      : 'Arnaud VALETTE',
      username  : 'adelineclere',
      email     : 'a.valette@hl-media.fr'
    }
    {
      id        : 2,
      name      : 'Jonathan CHEMLA',
      username  : 'jonathanchemal',
      email     : 'j.chemla@hl-media.fr'
    }
    {
      id        : 3,
        name    : 'Adeline CLERE',
      username  : 'adelineclere',
      email     : 'wf3@hl-media.fr'
    }
  ];

  /**
   * Ma fonction choisir contact, prend un contact
   * en paramètre et le transmet a la variable contactActif
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }


}




/**
* Dans Angular double {{ pour afficher variable ex : Welcome to {{ title }}!
 **/
