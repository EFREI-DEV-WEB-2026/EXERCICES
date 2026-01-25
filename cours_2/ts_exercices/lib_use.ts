// ============================================================================
// TP TYPESCRIPT - PARTIE 3 : UTILISATION DE LIBRAIRIES JAVASCRIPT
// ============================================================================

/*
OBJECTIF :
----------
Apprendre à utiliser des librairies JavaScript existantes dans un projet 
TypeScript en exploitant leurs définitions de types (@types).

LIBRAIRIES UTILISÉES :
----------------------
1. lodash : Librairie utilitaire JavaScript très populaire
2. date-fns : Manipulation de dates
3. axios : Client HTTP (bonus)

INSTALLATION :
--------------
npm install lodash date-fns
npm install --save-dev @types/lodash @types/node

Pour axios (optionnel) :
npm install axios
Note: axios inclut déjà ses propres types, pas besoin de @types/axios
*/

// ============================================================================
// 1. COMPRENDRE LES DÉFINITIONS DE TYPES
// ============================================================================

console.log("=== PARTIE 3 : UTILISATION DE LIBRAIRIES ===\n");
console.log("--- 1. Comprendre les définitions de types ---\n");

/*
EXERCICE 1.1 : Qu'est-ce que @types ?
--------------------------------------
Les packages @types contiennent les définitions de types TypeScript pour des 
librairies JavaScript qui n'incluent pas leurs propres types.

Exemple de structure :
- lodash (package npm) : Code JavaScript de la librairie
- @types/lodash (package npm) : Fichiers .d.ts avec les types TypeScript

Les fichiers .d.ts décrivent la forme (shape) du code JavaScript sans 
contenir d'implémentation.

EXERCICE 1.2 : Vérifier les types disponibles
----------------------------------------------
1. Après installation, regardez dans node_modules/@types/lodash
2. Vous y trouverez des fichiers .d.ts qui décrivent les types
3. TypeScript utilise automatiquement ces fichiers pour la vérification de types

EXERCICE 1.3 : Explorer les types dans l'IDE
---------------------------------------------
Dans VSCode ou votre IDE :
1. Importez une fonction de lodash
2. Survolez la fonction avec votre souris
3. Vous verrez la signature de type complète
4. Utilisez Ctrl+Click (Cmd+Click sur Mac) pour voir la définition
*/

// ============================================================================
// 2. UTILISATION DE LODASH AVEC TYPESCRIPT
// ============================================================================

console.log("--- 2. Utilisation de Lodash avec TypeScript ---\n");

import _ from 'lodash';

// 2.1. Fonctions de manipulation de tableaux
// Énoncé : Utilisez lodash avec des tableaux typés

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 3, name: "Keyboard", price: 75, category: "Electronics", inStock: false },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", inStock: true },
    { id: 5, name: "Desk", price: 450, category: "Furniture", inStock: true },
    { id: 6, name: "Chair", price: 250, category: "Furniture", inStock: false }
];

// 2.1.1. groupBy - Grouper par catégorie
// TypeScript infère automatiquement le type de retour grâce aux types de lodash
const productsByCategory = _.groupBy(products, 'category');
console.log("Produits groupés par catégorie:");
console.log(Object.keys(productsByCategory));

// 2.1.2. filter - Filtrer les produits en stock
const inStockProducts = _.filter(products, { inStock: true });
console.log(`\nNombre de produits en stock: ${inStockProducts.length}`);

// 2.1.3. sortBy - Trier par prix
const sortedByPrice = _.sortBy(products, ['price']);
console.log("\nProduit le moins cher:", sortedByPrice[0].name);
console.log("Produit le plus cher:", sortedByPrice[sortedByPrice.length - 1].name);

// 2.1.4. map - Transformation avec types
const productNames: string[] = _.map(products, 'name');
console.log("\nNoms des produits:", productNames);

// 2.2. Fonctions de manipulation d'objets
// Énoncé : Utilisez lodash pour manipuler des objets

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    address?: {
        street: string;
        city: string;
        zipCode: string;
    };
}

const user: User = {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    age: 30,
    address: {
        street: "123 Rue de Paris",
        city: "Paris",
        zipCode: "75001"
    }
};

// 2.2.1. pick - Sélectionner certaines propriétés
const userSummary = _.pick(user, ['firstName', 'lastName', 'email']);
console.log("\nRésumé utilisateur:", userSummary);

// 2.2.2. omit - Exclure certaines propriétés
const userWithoutEmail = _.omit(user, ['email']);
console.log("Utilisateur sans email:", userWithoutEmail);

// 2.2.3. get - Accès sécurisé aux propriétés imbriquées
const city = _.get(user, 'address.city', 'Ville non définie');
const country = _.get(user, 'address.country', 'Pays non défini'); // Propriété inexistante
console.log(`\nVille: ${city}`);
console.log(`Pays: ${country}`);

// 2.3. Fonctions utilitaires
// Énoncé : Explorez les fonctions utilitaires de lodash

// 2.3.1. debounce - Limiter la fréquence d'exécution d'une fonction
const searchAPI = (query: string): void => {
    console.log(`Recherche pour: ${query}`);
};

const debouncedSearch = _.debounce(searchAPI, 300);
// debouncedSearch ne s'exécutera que 300ms après le dernier appel

// 2.3.2. chunk - Diviser un tableau en sous-tableaux
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = _.chunk(numbers, 3);
console.log("\nTableau divisé en chunks de 3:", chunked);

// 2.3.3. uniq - Supprimer les doublons
const duplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const unique = _.uniq(duplicates);
console.log("Valeurs uniques:", unique);

// 2.3.4. cloneDeep - Copie profonde d'objet
const originalUser = { ...user };
const clonedUser = _.cloneDeep(user);
clonedUser.address!.city = "Lyon";
console.log("\nVille utilisateur original:", user.address?.city);
console.log("Ville utilisateur cloné:", clonedUser.address?.city);

// ============================================================================
// 3. UTILISATION DE DATE-FNS AVEC TYPESCRIPT
// ============================================================================

console.log("\n--- 3. Utilisation de date-fns avec TypeScript ---\n");

import { format, addDays, differenceInDays, isAfter, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

// 3.1. Formatage de dates
// Énoncé : Formatez des dates avec différents formats

const today: Date = new Date();
const formattedDate = format(today, 'dd/MM/yyyy');
const formattedDateTime = format(today, 'dd MMMM yyyy à HH:mm', { locale: fr });

console.log("Date formatée (DD/MM/YYYY):", formattedDate);
console.log("Date formatée (français):", formattedDateTime);

// 3.2. Manipulation de dates
// Énoncé : Ajoutez/soustrayez des jours

const futureDate: Date = addDays(today, 7);
const formattedFutureDate = format(futureDate, 'dd/MM/yyyy');
console.log(`\nDans 7 jours: ${formattedFutureDate}`);

// 3.3. Calcul de différences
// Énoncé : Calculez la différence entre deux dates

const startDate: Date = parseISO('2024-01-01');
const endDate: Date = parseISO('2024-12-31');
const daysDifference: number = differenceInDays(endDate, startDate);
console.log(`Jours entre le 01/01/2024 et le 31/12/2024: ${daysDifference}`);

// 3.4. Comparaison de dates
// Énoncé : Comparez des dates

const deadline: Date = addDays(today, 3);
const isLate: boolean = isAfter(today, deadline);
console.log(`\nEst en retard? ${isLate}`);

// 3.5. Application pratique : Gestion d'événements
// Énoncé : Créez un système de gestion d'événements avec dates

interface Event {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    location: string;
}

const events: Event[] = [
    {
        id: 1,
        title: "Réunion équipe",
        startDate: addDays(today, 2),
        endDate: addDays(today, 2),
        location: "Salle A"
    },
    {
        id: 2,
        title: "Formation TypeScript",
        startDate: addDays(today, 5),
        endDate: addDays(today, 7),
        location: "Salle B"
    }
];

console.log("\n=== Événements à venir ===");
events.forEach(event => {
    const daysUntil = differenceInDays(event.startDate, today);
    const formattedStart = format(event.startDate, 'dd MMMM yyyy', { locale: fr });
    console.log(`${event.title} - ${formattedStart} (dans ${daysUntil} jours)`);
});

// ============================================================================
// 4. CRÉATION DE TYPES PERSONNALISÉS POUR LIBRAIRIES
// ============================================================================

console.log("\n--- 4. Création de types personnalisés ---\n");

// 4.1. Wrapper typé pour une fonction lodash
// Énoncé : Créez une fonction wrapper avec des types stricts

function safeGroupBy<T, K extends keyof T>(
    collection: T[],
    key: K
): Record<string, T[]> {
    return _.groupBy(collection, key as string);
}

const groupedProducts = safeGroupBy(products, 'category');
console.log("Catégories:", Object.keys(groupedProducts));

// 4.2. Fonction générique avec lodash
// Énoncé : Créez une fonction de recherche typée

function findItems<T>(
    items: T[],
    predicate: Partial<T>
): T[] {
    return _.filter(items, _.matches(predicate))
}

const electronicsProducts = findItems(products, { category: 'Electronics' });
console.log(`\nProduits électroniques: ${electronicsProducts.length}`);

// 4.3. Type-safe helper avec lodash
// Énoncé : Créez un helper pour extraire des propriétés

function extractProperty<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return _.map(items, key);
}

const prices: number[] = extractProperty(products, 'price');
console.log("Prix extraits:", prices);

// ============================================================================
// 5. BONUS : AXIOS AVEC TYPESCRIPT
// ============================================================================

console.log("\n--- 5. Bonus: Axios avec TypeScript ---\n");

/*
Installation:
npm install axios

Axios inclut ses propres types TypeScript, pas besoin de @types/axios
*/

import axios, { AxiosResponse, AxiosError } from 'axios';

// 5.1. Interface pour la réponse API
// Énoncé : Créez des interfaces pour typer les réponses API

interface ApiUser {
    id: number;
    name: string;
    email: string;
    username: string;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

// 5.2. Fonction de requête typée
// Énoncé : Créez une fonction pour faire des requêtes HTTP typées

async function fetchUser(userId: number): Promise<ApiUser | null> {
    try {
        const response: AxiosResponse<ApiUser> = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        
        console.log(`Utilisateur récupéré: ${response.data.name}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error(`Erreur API: ${axiosError.message}`);
        } else {
            console.error("Erreur inconnue:", error);
        }
        return null;
    }
}

// Test (décommenter pour exécuter)
// fetchUser(1);

// 5.3. POST request typée
// Énoncé : Créez une fonction pour créer un utilisateur

interface CreateUserDto {
    name: string;
    email: string;
    username: string;
}

async function createUser(userData: CreateUserDto): Promise<ApiUser | null> {
    try {
        const response: AxiosResponse<ApiUser> = await axios.post(
            'https://jsonplaceholder.typicode.com/users',
            userData
        );
        
        console.log(`Utilisateur créé avec ID: ${response.data.id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Erreur lors de la création: ${error.response?.status}`);
        }
        return null;
    }
}

// Test (décommenter pour exécuter)
// createUser({ name: "John Doe", email: "john@example.com", username: "johndoe" });

// ============================================================================
// 6. EXERCICE PRATIQUE : SYSTÈME DE GESTION DE VOITURES
// ============================================================================

console.log("\n--- 6. Exercice pratique complet ---\n");

/*
ÉNONCÉ :
Créez un système de gestion de voitures en utilisant lodash et date-fns.
Le système doit permettre :
1. Grouper les voitures par marque
2. Filtrer les voitures selon différents critères
3. Calculer des statistiques (prix moyen, âge moyen)
4. Gérer les dates d'achat et de révision
*/

interface CarManagement {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    purchaseDate: Date;
    lastMaintenance: Date;
    nextMaintenance: Date;
}

const carFleet: CarManagement[] = [
    {
        id: 1,
        brand: "Renault",
        model: "Clio",
        year: 2020,
        price: 15000,
        purchaseDate: parseISO('2020-03-15'),
        lastMaintenance: parseISO('2024-06-01'),
        nextMaintenance: addDays(parseISO('2024-06-01'), 180)
    },
    {
        id: 2,
        brand: "Renault",
        model: "Alpine",
        year: 2022,
        price: 60000,
        purchaseDate: parseISO('2022-08-20'),
        lastMaintenance: parseISO('2024-09-15'),
        nextMaintenance: addDays(parseISO('2024-09-15'), 180)
    },
    {
        id: 3,
        brand: "Ferrari",
        model: "F8",
        year: 2023,
        price: 250000,
        purchaseDate: parseISO('2023-01-10'),
        lastMaintenance: parseISO('2024-10-01'),
        nextMaintenance: addDays(parseISO('2024-10-01'), 90)
    }
];

class CarFleetManager {
    constructor(private cars: CarManagement[]) {}

    // Grouper par marque
    groupByBrand(): Record<string, CarManagement[]> {
        return _.groupBy(this.cars, 'brand');
    }

    // Calculer le prix moyen
    getAveragePrice(): number {
        return _.meanBy(this.cars, 'price');
    }

    // Trouver les voitures nécessitant une révision bientôt
    getCarsNeedingMaintenance(daysThreshold: number = 30): CarManagement[] {
        const today = new Date();
        return _.filter(this.cars, car => {
            const daysUntilMaintenance = differenceInDays(car.nextMaintenance, today);
            return daysUntilMaintenance <= daysThreshold && daysUntilMaintenance >= 0;
        });
    }

    // Trier par prix
    sortByPrice(ascending: boolean = true): CarManagement[] {
        const sorted = _.sortBy(this.cars, 'price');
        return ascending ? sorted : sorted.reverse();
    }

    // Obtenir les statistiques
    getStatistics(): {
        totalValue: number;
        averagePrice: number;
        averageAge: number;
        oldestCar: CarManagement;
        mostExpensive: CarManagement;
    } {
        const currentYear = new Date().getFullYear();
        
        return {
            totalValue: _.sumBy(this.cars, 'price'),
            averagePrice: _.meanBy(this.cars, 'price'),
            averageAge: _.meanBy(this.cars, car => currentYear - car.year),
            oldestCar: _.minBy(this.cars, 'year')!,
            mostExpensive: _.maxBy(this.cars, 'price')!
        };
    }
}

// Utilisation du gestionnaire
const fleetManager = new CarFleetManager(carFleet);

console.log("=== Gestion de la flotte ===");
console.log("\nVoitures par marque:");
const byBrand = fleetManager.groupByBrand();
Object.entries(byBrand).forEach(([brand, cars]) => {
    console.log(`  ${brand}: ${cars.length} voiture(s)`);
});

console.log("\nStatistiques:");
const stats = fleetManager.getStatistics();
console.log(`  Valeur totale: ${stats.totalValue.toLocaleString()}€`);
console.log(`  Prix moyen: ${stats.averagePrice.toLocaleString()}€`);
console.log(`  Âge moyen: ${stats.averageAge.toFixed(1)} ans`);
console.log(`  Plus ancienne: ${stats.oldestCar.model} (${stats.oldestCar.year})`);
console.log(`  Plus chère: ${stats.mostExpensive.model} (${stats.mostExpensive.price.toLocaleString()}€)`);

console.log("\nVoitures nécessitant une révision dans 30 jours:");
const maintenanceNeeded = fleetManager.getCarsNeedingMaintenance(30);
maintenanceNeeded.forEach(car => {
    const days = differenceInDays(car.nextMaintenance, new Date());
    const dateStr = format(car.nextMaintenance, 'dd/MM/yyyy', { locale: fr });
    console.log(`  ${car.brand} ${car.model} - Révision le ${dateStr} (dans ${days} jours)`);
});

// ============================================================================
// RÉSUMÉ ET BONNES PRATIQUES
// ============================================================================

console.log("\n=== RÉSUMÉ : UTILISATION DE LIBRAIRIES EN TYPESCRIPT ===");
console.log("\n📚 Bonnes pratiques:");
console.log("  1. Vérifiez toujours si les types sont disponibles (@types/nom-package)");
console.log("  2. Utilisez les types fournis par les librairies pour le type-safety");
console.log("  3. Créez des wrappers typés pour simplifier l'utilisation");
console.log("  4. Exploitez l'inférence de types de TypeScript");
console.log("  5. Documentez vos fonctions avec JSDoc pour une meilleure DX");

console.log("\n✅ Librairies couvertes:");
console.log("  • lodash - Manipulation de données");
console.log("  • date-fns - Gestion des dates");
console.log("  • axios - Requêtes HTTP (bonus)");

console.log("\n🔍 Pour aller plus loin:");
console.log("  • Explorez DefinitelyTyped (github.com/DefinitelyTyped)");
console.log("  • Créez vos propres fichiers .d.ts pour des librairies sans types");
console.log("  • Utilisez des génériques pour créer des helpers réutilisables");