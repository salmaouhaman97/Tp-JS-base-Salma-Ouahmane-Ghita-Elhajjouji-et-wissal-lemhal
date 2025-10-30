//Exercice 1

var x = 5
let y = 10
const z = 15
// avec var on peut reassigner et redéclarer mais avec let on peut seulement reassigner et avec const on ne peut ni reassigner ni redéclarer 
var x = 10
let y = 7
const z = 20

//Exercice 2

function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a);
  console.log(b); // Pourquoi erreur ?
}		
testScope();
// il y a une erreur car la variable b est déclarée avec let et elle n'est donc pas accessible en dehors du bloc if.
console.log(x); //10
console.log(y); //7
console.log(z); //15
// z reste 15 car on ne peut pas reassigner une constante
x = 20
y = 25
// z = 30 // erreur car on ne peut pas reassigner une constante
console.log(x); //20
console.log(y); //25
console.log(z); //15    
// z reste 15 car on ne peut pas reassigner une constante

//Exercice 3

function sayHello(name) {
  return `Bonjour ${name}`;
}	
const sayHelloArrow = (name) => `Bonjour ${name}`;	

console.log(sayHello("Yuval")); // Bonjour Yuval
console.log(sayHelloArrow("Salma")); // Bonjour Salma
console.log(sayHello("ghita")); // Bonjour ghita
console.log(sayHello("salma")); // Bonjour Salma 

//Exercice 4

const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name);
  },
};

person.sayHello(); // Bonjour Sara
person.sayHelloArrow(); // Bonjour undefined


// index.js
import message, { PI, carre } from "./mathUtils.js";

message(); // 📘 Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));

//Exercice 5

const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi"); // ajoute "kiwi" à la fin
fruits.pop(); // retire le dernier élément
console.log(fruits); // ["pomme", "banane", "orange"]

//Exercice 6

const nums = [1, 2, 3, 4, 5];

// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2)); // Résultat : [2, 4, 6, 8, 10]

// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0)); // Résultat : [2, 4]

// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0)); // Résultat : 15

//Exercice 7

console.log(nums.find(n => n > 3)); // Résultat : 4
console.log(nums.some(n => n < 0)); // Résultat : false
console.log(nums.every(n => n > 0)); // Résultat : true


//Exercice 8

const user = { id: 1, name: "Ali", city: "Rabat" };

// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`); // Ali habite à Rabat

// Renommage
const { name: fullName, ...rest } = user; 
console.log(fullName); // Ali
console.log(rest); // { id: 1, city: "Rabat" }

//Exercice 9

const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000); 
}); // Résout la promesse après 2 secondes avec le message "Opération terminée !"

p.then(result => console.log(result)); // Affiche "Opération terminée !" après 2 secondes

//Exercice 10

// Déclaration d’une fonction asynchrone avec "async"
async function getUsers() {  
  try {
    // await → attend que la Promise renvoie une valeur
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // Convertit la réponse en JSON
    const data = await res.json(); 
    console.log(data); // Affiche le tableau d'utilisateurs
  } catch (e) {
    // Gestion des erreurs si fetch échoue
    console.error("Erreur :", e.message);
  }
}

getUsers(); // Gestion des erreurs si fetch échoue

//Exercice 11

const name = "Nadia"; 
const hour = new Date().getHours(); 
console.log(`Bonjour ${name}, il est ${hour}h`); 
// Bonjour Nadia, il est 14h

//Exercice 12

const arr1 = [1, 2]; 
const arr2 = [...arr1, 3, 4]; 
console.log(arr2); // arr2 =[1, 2, 3, 4]

function sum(...numbers) { 
  return numbers.reduce((a, b) => a + b, 0); // Résultat : 10
}

console.log(sum(1, 2, 3, 4)); // Résultat : 10


//Exercice 13

const settings = { theme: null };
console.log(settings.theme ?? "light"); // light

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city);  // undefined



const produits = [
  { nom: "Fraise", prix: 7, expireLe: "2027-12-01" },
  { nom: "Pomme", prix: 11, expireLe: "2024-09-01" },
  { nom: "Orange", prix:17 , expireLe: "2026-10-15" },
];

const aujourdHui = new Date(); 

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui); // Produits non expirés
const total = valides.reduce((s, p) => s + p.prix, 0); // Total : 24 DH


console.log("Produits valides :", valides);  // Produits valides : [ { nom: 'Fraise', prix: 7, expireLe: '2027-12-01' }, { nom: 'Orange', prix: 17, expireLe: '2026-10-15' } ]
console.log("Total :", total, "DH"); // Total : 24 DH


