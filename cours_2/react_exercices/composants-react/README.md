# TP : Composants React

### 1. Décomposer le JSX en plusieurs composants
1.1. A partir du code fournit dans le fichier `src/App.tsx` et notamment du JSX. 
Créez 3 nouveaux composants Header, Main et Section que vous appelerez dans le composant principal App.

1.2. La bonne pratique pour organiser ses composants et de créer un dossier components et d'y placer les 
fichiers des différents composants. Pour les 3 composants créés précédemment, placez les chacun dans des
fichiers à part puis importez les dans App.tsx.

### 2. Ajouter du contenu dynamique

2.1. Dans le composant Header, créer une nouvelle fonction getRandomString. 
Cette fonction prendra en entrée un tableau de string.
Elle devra retourner un élément au hasard de ce tableau de string.
Pour cela vous pourriez être intéressé d'utiliser 
Math.random() qui retourne un nombre flottant pseudo-aléatoire entre 0 (inclus) et 1 (exclus)

2.2. Utilisez cette fonction pour afficher aléatoire dans la balise h2 du header une technologie parmis React, Typescript, Vite, CSS et d'autres.

### 3. Import d'image dans un composant

3.1. D'après le cours utiliser la méthode appropriée pour importer le logo React dans le composant Header.

### 4. Utilisation des props

Nous allons construire une liste applatie des concepts vu dans ce cours : 

4.1. Ajoutez une nouvelle balise section native (et non le composant personnalisé que vous avez créé précédemment).
A cette section ajoutez l'id "core-concepts" pour quelle obtienne les attributs css nécessaires.
Ajoutez un titre h2 "Concepts importants".
Placez 2 balises (ouvrante et fermante) ul.

4.2. Créez un nouveau composant CoreConcept qui prend en tant que props un titre, une description et une image. 
N'oubliez pas de typer les props du composant. Pour cela vous pouvez créer un type CoreConceptProps.

Ce composant agira comme un élément de notre liste, donc utilisez les balises les plus judicieuses. 
L'image s'affichera en haut, puis en dessous le titre et enfin la description. 

4.3. Utilisez le tableau dans le fichier data.ts pour créer 4 composants chacun représentant un concept clé de React.

4.4. Trouvez un moyen d'afficher tout ces composants avec une seule ligne de code (vous pouvez vous aidez en cherchant dans les rappels Javascript).

### 5. Children props et composition de composants (components composition)

5.1. Sous la section core-concepts, créer une section avec l'id "examples" pour le css encore une fois. 
Ajoutez un titre en h2 et 2 balises menu.

La balise menu est similaire dans un sens à la balise ul, elle permet de contenir des éléments li.

5.2. Créez un nouveau composant TabButton. Ce composant devra afficher un bouton dans le menu créer précédemment. 
L'idée ensuite est d'avoir une liste de boutons.
Ce composant utilisera la propriété childre de props. 
N'oubliez de typer votre composant en créant un type spécial comme vu en cours.

5.3. Créez 4 bouttons nommés : Components, JSX, Props et State, grâce à votre nouveau composant. Placez les au niveau du menu.

### 6. Evènements

6.1. Créez une fonction qui sera exécutée à chaque fois qu'un utilisateur clique sur un composant TabButton (placez la dans le composant). Cette fonction affichera juste un message basique.

### 7. State

7.1. Passez la fonction à TabButton depuis le composant App.tsx.

7.2. Nous aimerions récupérer le nom du boutton cliqué pour l'afficher dans le composant App sous la forme d'une valeur dans le JSX : 
```
<section>
    <menu>...</menu>
    {selecteTab}
</section>
```

Pour cela utiliser la hook d'état useState. Vous pouvez l'initialiser avec une string "empty".

7.3. Nous souhaiterions afficher du texte et du code en dessous du menu en fonction du bouton cliqué (pour vous donner une idée regarder l'objet EXAMPLES dans le fichier data.ts).
Pour cela ajouter des balises entre deux <div></div> en dessous du menu.
Choisissez judicieusement vos balises, nous avons besoins d'un titre, d'une description et d'un bout de code comme indiqué 
dans le fichier data.ts.
Ajoutez l'id "tab-content" à la balise ouvrante div.

7.4. Maintenant remplissez vos différents balises avec le titre, le texte et le code correspondant au bouton cliqué en utilisant les donnes de l'objet EXAMPLES.

Il se peut que vous ayez un problème de type lors de cette question en appelant les clés de l'objet EXAMPLES.
Plusieurs choix s'offrent à vous : 
-Vous pouvez typer votre variable pour assurer à Typescript que la valeur appartient bien au clé de l'objet EXAMPLES : 
const tabContent = EXAMPLES[selectedTab as keyof typeof EXAMPLES];
-Vous pouvez utiliser un Enum tout du long et ne plus utiliser de string pour la variable de votre hook.