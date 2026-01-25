// ============================================================================
// TP TYPESCRIPT - DE JAVASCRIPT À TYPESCRIPT
// ============================================================================


PRÉREQUIS : Installation de TypeScript
--------------------------------------
1. Installer Node.js (si ce n'est pas déjà fait)
2. Installer TypeScript globalement :
   npm install -g typescript

3. Vérifier l'installation :
   tsc --version
   Si cela ne fonctionne pas, vérifier bien que vous avez le dossier .npm-global dans votre path : 
   echo $PATH | grep npm-global
   Si ce n'est pas le cas ajouter le avec cette commande : export PATH=~/.npm-global/bin:$PATH 
   Vous pouvez ajouter cette commande à la fin de votre .bashrc pour ne plus avoir à la taper à chaque fois. 

4. Dans votre dossier de projet, initialiser npm :
   npm init -y

5. Installer TypeScript localement (recommandé) :
   npm install --save-dev typescript

6. Installer les types pour Node.js :
   npm install --save-dev @types/node


// ============================================================================
// 1. CONFIGURATION DE TYPESCRIPT
// ============================================================================


EXERCICE 1.1 : Créer un fichier tsconfig.json
----------------------------------------------
Dans votre terminal, exécutez :
  tsc --init

Cela créera un fichier tsconfig.json avec de nombreuses options.
Voici une configuration minimale recommandée pour débuter :
```
{
  "compilerOptions": {
    "target": "ES2020",                    // Version JavaScript cible
    "module": "commonjs",                   // Système de modules
    "lib": ["ES2020"],                      // Bibliothèques disponibles
    "outDir": "./dist",                     // Dossier de sortie des fichiers JS compilés
    "rootDir": "./src",                     // Dossier source des fichiers TS
    "strict": true,                         // Active tous les checks stricts
    "esModuleInterop": true,                // Meilleure compatibilité imports
    "skipLibCheck": true,                   // Saute la vérification des .d.ts
    "forceConsistentCasingInFileNames": true, // Cohérence noms fichiers
    "resolveJsonModule": true,              // Permet d'importer des JSON
    "moduleResolution": "node"              // Résolution des modules comme Node.js
  },
  "include": ["src/**/*"],                  // Fichiers à inclure
  "exclude": ["node_modules", "dist"]       // Fichiers à exclure
}
```
