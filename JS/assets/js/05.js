/* ------------------------------------------------
       ⚠️   INBCREMENTATION ET DECREMENTATION
--------------------------------------------------*/


// ########### Incrémentation ########### //

var nb1 = 1;
nb1 = nb1 + 1;
// Ecriture simplifiée
nb1++; // ⚠️ Raccourci de nb1 + 1 > Par pas de 1 (on incrémente de 1)


// ########### Décrémentation ########### //

nb1 = nb1 - 1;
// Ecriture simplifiée
nb1--; // ⚠️ Raccourci de nb1 - 1 > Par pas de 1 (on décrémente de 1)


// ############ Subtilité ############ /
nb1 = 0;
console.log(nb1++); // il incrémente après avoir afficher donc on ne le voit pas
console.log(nb1);

nb1 = 0;
console.log(++nb1);