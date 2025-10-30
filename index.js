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
 
/*output: 



 {


    id: 1,


    name: 'Leanne Graham',


    username: 'Bret',


    email: 'Sincere@april.biz',


    address: {


      street: 'Kulas Light',


      suite: 'Apt. 556',


      city: 'Gwenborough',


      zipcode: '92998-3874',


      geo: [Object]


    },


    phone: '1-770-736-8031 x56442',


    website: 'hildegard.org',


    company: {


      name: 'Romaguera-Crona',


      catchPhrase: 'Multi-layered client-server neural-net',


      bs: 'harness real-time e-markets'


    }


  },


  {


    id: 2,


    name: 'Ervin Howell',


    username: 'Antonette',


    email: 'Shanna@melissa.tv',


    address: {


      street: 'Victor Plains',


      suite: 'Suite 879',


      city: 'Wisokyburgh',


      zipcode: '90566-7771',


      geo: [Object]


    },


    phone: '010-692-6593 x09125',


    website: 'anastasia.net',


    company: {


      name: 'Deckow-Crist',


      catchPhrase: 'Proactive didactic contingency',


      bs: 'synergize scalable supply-chains'


    }


  },


  {


    id: 3,


    name: 'Clementine Bauch',


    username: 'Samantha',


    email: 'Nathan@yesenia.net',


    address: {


      street: 'Douglas Extension',


      suite: 'Suite 847',


      city: 'McKenziehaven',


      zipcode: '59590-4157',


      geo: [Object]


    },


    phone: '1-463-123-4447',


    website: 'ramiro.info',


    company: {


      name: 'Romaguera-Jacobson',


      catchPhrase: 'Face to face bifurcated interface',


      bs: 'e-enable strategic applications'


    }


  },


  {


    id: 4,


    name: 'Patricia Lebsack',


    username: 'Karianne',


    email: 'Julianne.OConner@kory.org',


    address: {


      street: 'Hoeger Mall',


      suite: 'Apt. 692',


      city: 'South Elvis',


      zipcode: '53919-4257',


      geo: [Object]


    },


    phone: '493-170-9623 x156',


    website: 'kale.biz',


    company: {


      name: 'Robel-Corkery',


      catchPhrase: 'Multi-tiered zero tolerance productivity',


      bs: 'transition cutting-edge web services'


    }


  },


  {


    id: 5,


    name: 'Chelsey Dietrich',


    username: 'Kamren',


    email: 'Lucio_Hettinger@annie.ca',


    address: {


      street: 'Skiles Walks',


      suite: 'Suite 351',


      city: 'Roscoeview',


      zipcode: '33263',


      geo: [Object]


    },


    phone: '(254)954-1289',


    website: 'demarco.info',


    company: {


      name: 'Keebler LLC',


      catchPhrase: 'User-centric fault-tolerant solution',


      bs: 'revolutionize end-to-end systems'


    }


  },


  {


    id: 6,


    name: 'Mrs. Dennis Schulist',


    username: 'Leopoldo_Corkery',


    email: 'Karley_Dach@jasper.info',


    address: {


      street: 'Norberto Crossing',


      suite: 'Apt. 950',


      city: 'South Christy',


      zipcode: '23505-1337',


      geo: [Object]


    },


    phone: '1-477-935-8478 x6430',


    website: 'ola.org',


    company: {


      name: 'Considine-Lockman',


      catchPhrase: 'Synchronised bottom-line interface',


      bs: 'e-enable innovative applications'


    }


  },


  {


    id: 7,


    name: 'Kurtis Weissnat',


    username: 'Elwyn.Skiles',


    email: 'Telly.Hoeger@billy.biz',


    address: {


      street: 'Rex Trail',


      suite: 'Suite 280',


      city: 'Howemouth',


      zipcode: '58804-1099',


      geo: [Object]


    },


    phone: '210.067.6132',


    website: 'elvis.io',


    company: {


      name: 'Johns Group',


      catchPhrase: 'Configurable multimedia task-force',


      bs: 'generate enterprise e-tailers'


    }


  },


  {


    id: 8,


    name: 'Nicholas Runolfsdottir V',


    username: 'Maxime_Nienow',


    email: 'Sherwood@rosamond.me',


    address: {


      street: 'Ellsworth Summit',


      suite: 'Suite 729',


      city: 'Aliyaview',


      zipcode: '45169',


      geo: [Object]


    },


    phone: '586.493.6943 x140',


    website: 'jacynthe.com',


    company: {


      name: 'Abernathy Group',


      catchPhrase: 'Implemented secondary concept',


      bs: 'e-enable extensible e-tailers'


    }


  },


  {


    id: 9,


    name: 'Glenna Reichert',


    username: 'Delphine',


    email: 'Chaim_McDermott@dana.io',


    address: {


      street: 'Dayna Park',


      suite: 'Suite 449',


      city: 'Bartholomebury',


      zipcode: '76495-3109',


      geo: [Object]


    },


    phone: '(775)976-6794 x41206',


    website: 'conrad.com',


    company: {


      name: 'Yost and Sons',


      catchPhrase: 'Switchable contextually-based project',


      bs: 'aggregate real-time technologies'


    }


  },


  {


    id: 10,


    name: 'Clementina DuBuque',


    username: 'Moriah.Stanton',


    email: 'Rey.Padberg@karina.biz',


    address: {


      street: 'Kattie Turnpike',


      suite: 'Suite 198',


      city: 'Lebsackbury',


      zipcode: '31428-2261',


      geo: [Object]


    },


    phone: '024-648-3804',


    website: 'ambrose.net',


    company: {


      name: 'Hoeger LLC',


      catchPhrase: 'Centralized empowering task-force',


      bs: 'target end-to-end models'


    }


  }


] */



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


