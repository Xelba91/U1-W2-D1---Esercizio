/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//Esercizio nel console.log
 console.log("Esercizio 1 ","string, number, boolean, undefined, null , NaN.")   ;    

// Il dato Stringa in Javascript indica sia il singolo
// carattere che la sequenza finita di caratteri.
// Le stringhe possono essere manipolate tramite
// metodi. Le stringhe vengono definite tramite l'utilizzo
// degli apici doppi o singoli (meglio usare i doppi!)
let myName111 = "Alessandro";
let Ngioco = 'Cyberpunk';


// Il dato Numerico in Javascript viene indicato senza
// distinzione tra intero e decimale. Il decimale si esprime
// con il punto

let number22 = 14;
let number23 = 14.5;

// Il dato Booleano ammette due soli valori: true e
// false. Questo tipo di dato è tipico dei controlli
// condizionali, utili per far prendere delle decisioni al
// nostro codice

let boolean1 = true;
let boolean2 = false;
// undefined  ---> rappresenta un valore non ancora esistente es. variabile inizializzata vuota

let vUndef ;

//null ---> rappresenta un'assenza di valore intenzionale, es. se troviamo null una variabile è stata svuotata dallo sviluppatore

let fakeName = null;
// NaN rappresenta un errore di calcolo. E’ il risultato di un’operazione non corretta o indefinita, ad esempio:

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Alessandro";

// Esercizio nel console.log
console.log("Esercizio 2:" + ' let myName = "Alessandro";')  ;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3: La somma di 12 + 20 =" , 12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;


// Esercizio nel console.log
console.log("Esercizio 4 - La creazione e assegnazione di una variabile : let x = 12;") ;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Carrese";
const mySurname = "Carrese";
// mySurname = "Ciao";  errore, non si puo riassegnare una variabile const!

// Esercizio nel console.log (\n si usa per andare a capo)
console.log("Esercizio 5:\n"+'myName = "Carrese"; \nconst mySurname = "Carrese";\n'+
'mySurname = "Ciao";  errore, non si puo riassegnare una variabile const!') ;


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6 - 4-x:",4 - x);

let sub = 4-x;
console.log("Esercizio 6 con variabile:  let sub = 4-x; = ",sub) ;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1;
let name2;

name1 = "john";
name2 = "John";

console.log("Esercizio 7: jhon è uguale a Jhon?",name1 === name2) ;

// EXTRA
console.log("Esercizio 7 Extra: trasformato i valori con il .toLowerCase",name1.toLowerCase() === name2.toLowerCase()) ;

//Esercizio Ricetta

let ricetta = 'La besciamella è una salsa di base tra le più versatili in cucina: facile e veloce da realizzare, è perfetta per dare una marcia in più a tanti piatti diversi, dalle lasagne alla pasta al forno, come quella gratinata con i finocchi per esempio, fino addirittura agli spinaci o al petto di pollo! La sua paternità è rivendicata tanto dai francesi quanto dagli italiani. L’ipotesi più accreditata è che sia stata Caterina de’ Medici ad averla importata in Francia con il nome che aveva allora, ovvero “salsa colla”. Ma è grazie al cortigiano Louis de Béchameil che prese poi il nome di salsa besciamella nonostante Pellegrino Artusi preferisse italianizzarla nel suo ricettario con il nome di “balsamella”, ormai in disuso. Scoprite tutti i segreti per ottenere una besciamella perfetta fatta in casa cremosa e senza grumi e scommettiamo che non ricorrerete mai più a quella confezionata!'

console.log(ricetta)

// Ingredienti
let ingredienti = "Latte = 1lt\nFarina= 100gr\nBurro=100gr\nSale=2gr\nNoce Moscata=10gr"
console.log(ingredienti)
let latte = 1000;
let farina = 100;
let burro = 100;
let sale= 2;
let noceMoscata = 10;
let cottura  = 0;
let cottura2 = 0;


//Preparazione

// COME PREPARARE LA BESCIAMELLA

console.log("1 - Versate il latte in un pentolino")
let pentolino = 0;
pentolino += latte;
console.log("2 - aggiungete la noce moscata")
pentolino += noceMoscata;
console.log("3 - aggiungere e il sale, poi fatelo scaldare.")
pentolino += sale;
cottura = 3;
console.log("Il peso del primo pentolino è:",pentolino, "grammi\ntempo di cottura :", cottura,"minuti")
console.log("4 - Mettete il burro in un altro pentolino  e fatelo sciogliere a fuoco dolce.");
let pentolino2 = 0;
pentolino2 += burro;
cottura2 = 2;
console.log("5 - Poi aggiungete la farina in una volta sola.");
console.log("6 - Mescolate vigorosamente con una frusta a mano per evitare la formazione di grumi.") 
console.log("7 - Continuate a mescolare fino ad ottenere un composto dorato, il roux.") 
pentolino2 += farina;
console.log("Il peso del secondo pentolino è:",pentolino2, "grammi")
console.log("tempo di cottura:",cottura2,"minuti")
console.log("8 - A questo punto stemperate il roux versando prima poco latte caldo e poi tutto il resto."); 
console.log("9 - Continuate a mescolare a fuoco dolce fino a raggiungere la consistenza desiderata; cuocendo la besciamella per 5-6 minuti otterrete una densità media. La vostra besciamella è pronta per essere utilizzata!");
let besciamella = 0;
let cotturaTot = (cottura + cottura2) + 6;
besciamella = pentolino + pentolino2;
let aa;
let bi;
let ci;
aa = "Il peso totale della ricetta per 4 persone è:"+ besciamella +" grammi.\n";
bi = "La porzione per una persona è di "+ besciamella / 4 + " grammi.\n";
ci = "Il tempo totale di cottura è: "+ cotturaTot + " minuti";

let risposta = aa+bi+ci;
console.log(risposta);