# **TP 3.2 : useRef hook et portails**

### **1.Accéder aux éléments du DOM grâce aux "refs"**

Cet exercice est à réaliser dans le dossier "access-dom-el-with-refs".

Vous disposez d’un extrait de code faisant partie d’une application plus large qui gère les téléchargements d’images par les utilisateurs.

Étant donné que l’élément natif `<input type="file">` est difficile à styliser et ne correspond pas au style souhaité pour l’application, il est masqué via `display: none` dans le fichier **index.css** fourni.

**Votre tâche** consiste à garantir que l’événement de clic sur l’élément `<input type="file>` soit déclenché **lorsque le bouton** `<button>Pick Image</button>` est cliqué. Cela peut être réalisé en appelant la méthode native **`click()`** sur l’élément `<input>` sous-jacent.

Pour y parvenir, vous devez utiliser la fonctionnalité **`ref` de React** afin d’obtenir une référence à l’élément `<input type="file">`, puis exécuter la méthode **`click()`** sur cet élément chaque fois que le bouton est cliqué.

### **2.Gestion d’autres valeurs avec les "refs"**

Cet exercice est à réaliser dans le dossier "handling-other-val-with-refs".

Vous travaillez sur une application **"Workout"** et votre tâche consiste à **démarrer et arrêter des minuteurs** lorsque les utilisateurs cliquent sur les boutons **"Start"** et **"Stop"** d’un exercice sélectionné.

Un extrait de code vous est fourni, affichant déjà des éléments d’exercices. **Vous n’avez donc pas besoin de modifier le code JSX ni de gérer un état (state)**.

**Votre mission** est la suivante :
1. **Démarrer un minuteur** lorsque le bouton **"Start"** est cliqué.
2. **Arrêter (effacer) ce minuteur** lorsque le bouton **"Stop"** est cliqué.
3. Si un minuteur arrive à expiration, **le même code doit s’exécuter** que si l’utilisateur l’avait arrêté manuellement (en appuyant sur **"Stop"**).

**Durée du minuteur** :
- Chaque exercice doit avoir une durée d’expiration différente. Vous trouverez cette durée spécifique à chaque exercice dans le composant **Workout**.

**Indépendance des minuteurs** :
- Chaque instance du composant **Workout** doit gérer son propre minuteur, **indépendamment des autres**. Par exemple, si vous démarrez des minuteurs pour "Pushups" et "Squats", cliquer sur **"Stop"** pour "Squats" ne doit pas affecter le minuteur de "Pushups".

**Comportement à l’expiration** :
- Lorsqu’un minuteur expire, la même fonction que celle déclenchée par le bouton **"Stop"** doit être exécutée.

### **3.Transmission des "refs" (Forwarding Refs)**

Cet exercice est à réaliser dans le dossier "forwarding-refs".

Votre tâche consiste à finaliser un composant **Input** personnalisé, commencé par un collègue. Ce composant doit être **hautement configurable** et répondre aux exigences suivantes :

1. **Accepter une prop `label`** :
   Cette prop servira à définir le texte de l’élément `<label>` (c’est-à-dire le contenu entre les balises `<label>`).

2. **Accepter toutes les autres props valides pour un `<input>`** :
   Toutes les props que l’on peut ajouter à un élément `<input>` natif doivent être transmises à l’élément `<input>` du composant.

3. **Accepter et transmettre la prop spéciale `ref`** :
   La prop `ref` reçue doit être **connectée** à l’élément `<input>` rendu par le composant.

Ce composant **Input** est déjà utilisé dans le composant **App**, où certaines props (comme `label` et `type`) sont déjà définies.

**Votre mission supplémentaire** :
Dans la fonction **`handleSaveData`**, vous devez **lire les valeurs saisies** (nom et email) à l’aide de la fonctionnalité **`ref`** de React.

Pour cela :
- Assurez-vous que le composant **Input** puisse recevoir la prop `ref` et la transmettre à l’élément `<input>`.
- Ajoutez des **refs** appropriées dans le composant **App** et utilisez-les dans **`handleSaveData`** pour récupérer les données saisies.
- Les valeurs lues doivent ensuite être **stockées dans l’objet `userData`**, qui existe déjà.

### **4. Exposition des APIs de composant**

Cet exercice est à réaliser dans le dossier "exposing-components-apis".

Vous travaillez sur une partie d’une application contenant un **formulaire** qui doit pouvoir être **réinitialisé depuis l’extérieur** de ce formulaire.

Un collègue a préparé un composant **Form** qui inclut quelques champs de saisie factices et un bouton **"Save"** qui ne fait rien pour l’instant.

**Votre tâche** consiste à **exposer une fonction `clear()`** depuis l’intérieur du composant **Form**, afin que les autres composants utilisant ce formulaire puissent appeler cette fonction pour le réinitialiser.

Cette fonction `clear()` doit **appeler la méthode native `reset()`** de l’objet JavaScript du formulaire (l’objet sous-jacent de l’élément `<form>`, qui dispose d’une méthode `reset()` faisant exactement ce que son nom suggère).

Ainsi, le composant **Form** devra pouvoir être utilisé de cette manière :

```jsx
function SomeComponent() {
  const form = React.useRef();

  function handleClear() {
    form.current.clear();
  }

  return <Form ref={form} />;
}
```

**Après avoir ajouté cette fonctionnalité au composant Form**, vous devrez modifier le composant **App** pour :
1. **Établir une "connexion"** avec le composant **Form**.
2. **Appeler la méthode `clear()`** nouvellement exposée depuis la fonction **`handleRestart()`** du composant **App**.

Vous devrez donc ajouter un code similaire à l’exemple ci-dessus dans le composant **App**.

### **5.Travail avec les Portails (Portals)**

Cet exercice est à réaliser dans le dossier "working-with-portals".

Un collègue vous a demandé de finaliser le travail sur un composant **Toast** qu’il a commencé.

Ce composant doit **afficher un message d’information court** lors d’événements spécifiques sur la page, par exemple, lorsqu’un utilisateur s’inscrit avec succès à un cours.

**Pour optimiser la structure finale du DOM**, le contenu rendu par le composant **Toast** doit être **injecté directement dans l’élément `<body>`** (accessible via `document.querySelector('body')`). **Il ne doit pas être rendu à l’endroit où le composant `<Toast />` est utilisé dans le code JSX.**

**Votre tâche** :
1. **Afficher conditionnellement** le composant **Toast** modifié une fois que l’utilisateur a cliqué sur le bouton **"Enrol"** dans le composant **App**.
2. **Supprimer le composant Toast** de la page après **3 secondes** (à l’aide de `setTimeout`).