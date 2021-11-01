# Site de présentation de ejDicto

+ Ce site présente visuellement l'application [ejDicto](https://pcardona34.github.io/ejdicto) : diaporama annoté.
+ Il s'appuie notamment sur *W3.css Slideshow*.

## Pour adapter ce site à vos besoins

### Prérequis

+ Vous devez disposer d'un environnement de développement approprié 
(station de travail GNU/linux, Mac OS ou Windows avec les 
outils de développement activés : notamment l'interpréteur de commandes 
(shell) Bash. Vérifiez la présence de ces outils en ouvrant une console 
et en affichant leur version, sinon il faudra les installer.

Exécutez :

    bash --version;
    node --version;
    npm --version;
    git --version

+ Pour les installer : Bash est présent sur GNU/Linux et Mac OS. 
[bash: sous Windows 10](https://korben.info/installer-shell-bash-linux-windows-10.html), 
[node](https://nodejs.dev/how-to-install-nodejs), 
[npm](https://www.npmjs.com/get-npm), 
[git](https://git-scm.com).

+ Parfait ! Vous pouvez passer à l'installation de la fabrique.

### Première installation de la fabrique

    git clone https://github.com/pcardona34/ejdicto_info/
    cd ejdicto_info
    npm install

### Pour exécuter le serveur de développement
    npm run dev

+ Affichez l'application en phase de développement, par exemple à l'URL :

    http://127.0.0.1:9966/

+ Pour une personnalisation avancée, le code à adapter à vos besoins se situe dans les dossiers  
`src` et `src/lib`.
+ Les images du diaporama se situent dans le dossier `static/images`.

## Pour préparer une version de production

+ La publication des scripts et des feuilles de style est effectuée dans le dossier `public`.

### La première fois seulement

+ Pour créer une version minifiée des bibliothèques css et javascript 
externes. Il s'agit notamment des styles fournis par w3school, ainsi que la police d'icones IcoMoon.

Exécutez :

    npm run vendors

### La première fois et les suivantes

    npm run build
    npm run test

+ Testez la version de pré-production dans votre navigateur à l'URL indiquée par le serveur après son 
démarrage, par exemple&nbsp;:

    http://localhost:8080/

+ Pour arrêter le serveur de test : `Ctrl + C`

## Pour publier vers les pages de Github (gh-pages)

+ La cible de la publication est la branche *gh-pages* qui coïncide avec la branche *master*.
+ Effectuez préalablement ce réglage dans les paramètres de votre dépôt 
Github la première fois. 

Puis exécutez :

    npm run clean
    npm run deploy


