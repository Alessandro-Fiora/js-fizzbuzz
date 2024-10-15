// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// ! DATI
let num = 0;
let output;

// ! ELABORAZIONE
// PER OGNI numero da 1 a 100
for (let i = 0; i < 100; i++) {
  // assegno a num il valore del numero corrente
  num = i + 1;
  //   assegno ad output il valore di default del numero corrente
  output = num;

  // SE il numero corrente (USO NUM PER AVERE SEMPRE IL NUMERO CORRENTE E NON RICEVERE IL DATO SOSTITUITO) è divisibile per 3 lo sostituisco con Fizz
  if (num % 3 === 0) {
    output = "Fizz";
  }

  // SE il numero corrente (USO NUM PER AVERE SEMPRE IL NUMERO CORRENTE E NON RICEVERE IL DATO SOSTITUITO) è divisibile per 5 lo sostituisco con Buzz
  if (num % 5 === 0) {
    output = "Buzz";
  }

  // SE il numero corrente (USO NUM PER AVERE SEMPRE IL NUMERO CORRENTE E NON RICEVERE IL DATO SOSTITUITO) è divisibile per 3 e divisibile per 5 lo sostituisco con FizzBuzz
  if (num % 5 === 0 && (i + 1) % 3 === 0) {
    output = "FizzBuzz";
  }

  // ! OUTPUT
  // STAMPO il numero corrente (eventualmente sostituito con Fizz, Buzz o FizzBuzz)
  console.log(output);
}
