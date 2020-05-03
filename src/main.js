/* ==================================== *
 *      e j D i c t o      info         *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* Script majeur en phase de développement : main.js
 * Compilé, il produit app.js dans le dossier 'build'
 *  --------------------------------
 * Appels des dépendances
 * Compilation des templates
 * --------------------------------
*/

"use strict";
/*jslint browser: true*/
/*global window*/

/* VERSION */
const versionApp = require('../package.json').version;

/* Messages de l'interface */
const MSG = require('../static/config/messages.json').msg;
/* Images et commentaires */
const IMG = require('../static/config/images.json').img;

/* Dépendances externes : frameworks & modules*/
/* Runtime de compilation des templates Handlebars avec le bundler Browserify */
const Handlebars = require('hbsfy/runtime');
const chibijs = require('chibijs');

window.slideIndex = require('./lib/scripts/diaporama.js').slideIndex;
window.plusDivs = require('./lib/scripts/diaporama.js').plusDivs;
window.currentDiv = require('./lib/scripts/diaporama.js').currentDiv;
window.showDivs = require('./lib/scripts/diaporama.js').showDivs;


/* ========================================
 *          H e l p e r s
 *           Génériques
 * ========================================
 */

/* Passer en capitale la première lettre de la chaine */
Handlebars.registerHelper("capitalisePremiereLettre", function (sChaine) {
  if(typeof sChaine === 'string') {
    return sChaine.charAt(0).toUpperCase() + sChaine.slice(1);
    }
    return null;
});

/* Helper : encode HTML (entitie, etc.) */
Handlebars.registerHelper('encodeChaine',function(chaine){
    return new Handlebars.SafeString(chaine);
});

/* Helper : augmente l'index de 1 */
Handlebars.registerHelper("indexPlusUn", function (index){
  let indice = 0;
  if (typeof index === 'integer'){
  indice = index + 1;
  }else{
  indice = parseInt(index, 10);
  indice = indice + 1;
  }
  return indice;
});


/* ========================================
 *          Templates des Pages
 * ========================================
 */

Handlebars.registerPartial("diaporama", require('./composants/diaporamaTemplate.hbs'));

/* Page d'accueil générale */
const accueilTemplate = require("./pages/accueilTemplate.hbs");
/* Pied de page */
const piedDePageTemplate = require("./composants/piedTemplate.hbs");

/* =========================================================
 *    On charge l'interface via un événement global load
 * =========================================================
 */

window.addEventListener('load', () => {
 /* Zones cibles */
const app = $('#app');
const piedDePage = piedDePageTemplate({'version': versionApp});


  /* =========================
   * === Chemin générique ===
   * =========================
   */
  let contenu = {};
  contenu.bienvenue = MSG.bienvenue;
  contenu.img = IMG;
  let html = accueilTemplate(contenu);
  console.log(html);
  app.html(html);
  showDivs(slideIndex);
  app.htmlAppend(piedDePage);


}); /* Fin de event load */

