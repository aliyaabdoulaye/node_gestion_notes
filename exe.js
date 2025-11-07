#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

program
  .name('@ALIYA')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('ifnti')
  .argument('<string>', "Niveau d'étude (L1, L2, L3)")
  .action((str, Option) =>{
    //console.log(str)
    console.log("Bonjour " + str)
  })

program.parse();























// import { Command } from "commander";

// const program = new Command();

// program
//   .name('@ALIYA')
//   .description('CLI pour quelques utilitaires JavaScript')
//   .version('0.8.0');

// // Définir une commande "ifnti"
// program
//   .command('ifnti')
//   .argument('<string>', "Niveau d'étude (L1, L2, L3)")
//   .action((niveau) => {
//     if (["L1", "L2", "L3"].includes(niveau.toUpperCase())) {
//       console.log(`Bonjour étudiant(e) de ${niveau}`);
//     } else {
//       console.log(`Niveau "${niveau}" non reconnu. Utilise L1, L2 ou L3.`);
//     }
//   });

// program.parse();


// import { Command } from "commander";

// const program = new Command();

// program
//   .name('@ALIYA')
//   .description('CLI pour quelques utilitaires JavaScript')
//   .version('0.8.0');

// // Commande avec argument et options
// program
//   .command('ifnti')
//   .argument('<niveau>', "Niveau d'étude (L1, L2, L3)")
//   .option('-n, --nom <nom>', 'Nom de l’étudiant')
//   .option('-a, --age <age>', 'Âge de l’étudiant')
//   .action((niveau, options) => {
//     // Vérification du niveau
//     if (!["L1", "L2", "L3"].includes(niveau.toUpperCase())) {
//       console.log(`Niveau "${niveau}" non reconnu. Utilise L1, L2 ou L3.`);
//       return;
//     }

//     // Récupération des options
//     const nom = options.nom ? options.nom : "Inconnu(e)";
//     const age = options.age ? options.age : "Non précisé";

//     // Affichage personnalisé
//     console.log(`Bonjour ${nom} `);
//     console.log(`Niveau : ${niveau}`);
//     console.log(`Âge : ${age}`);
//   });

// program.parse();

// import { Command } from "commander";

// const program = new Command();

// program
//   .name('@ALIYA')
//   .description('CLI multifonction pour tester plusieurs commandes ')
//   .version('1.0.0');

// //
// // Commande 1 : ifnti
// //
// program
//   .command('ifnti')
//   .argument('<niveau>', "Niveau d'étude (L1, L2, L3)")
//   .option('-n, --nom <nom>', 'Nom de l’étudiant')
//   .option('-a, --age <age>', 'Âge de l’étudiant')
//   .action((niveau, options) => {
//     if (!["L1", "L2", "L3"].includes(niveau.toUpperCase())) {
//       console.log(`Niveau "${niveau}" non reconnu. Utilise L1, L2 ou L3.`);
//       return;
//     }

//     const nom = options.nom ?? "Inconnu(e)";
//     const age = options.age ?? "Non précisé";

//     console.log(`Bonjour ${nom} !`);
//     console.log(`Niveau : ${niveau}`);
//     console.log(`Âge : ${age}`);
//   });

// //
// // Commande 2 : bonjour
// //
// program
//   .command('bonjour')
//   .option('-n, --nom <nom>', 'Nom de la personne')
//   .option('-l, --langue <langue>', 'Langue de salutation (fr ou en)', 'fr')
//   .action((options) => {
//     const nom = options.nom ?? "inconnu(e)";
//     const langue = options.langue.toLowerCase();

//     if (langue === 'en') {
//       console.log(` Hello ${nom}!`);
//     } else {
//       console.log(` Bonjour ${nom}!`);
//     }
//   });

// //
// // Commande 3 : calcul
// //
// program
//   .command('calcul')
//   .argument('<a>', 'Premier nombre')
//   .argument('<b>', 'Deuxième nombre')
//   .option('-o, --operation <type>', 'Type d’opération (add, sub, mul, div)', 'add')
//   .action((a, b, options) => {
//     const x = Number(a);
//     const y = Number(b);
//     let resultat;

//     switch (options.operation) {
//       case 'add':
//         resultat = x + y;
//         break;
//       case 'sub':
//         resultat = x - y;
//         break;
//       case 'mul':
//         resultat = x * y;
//         break;
//       case 'div':
//         resultat = y !== 0 ? x / y : "Erreur : division par zéro";
//         break;
//       default:
//         console.log(' Opération non reconnue');
//         return;
//     }

//     console.log(`Résultat de ${options.operation}(${x}, ${y}) = ${resultat}`);
//   });

// program.parse();
