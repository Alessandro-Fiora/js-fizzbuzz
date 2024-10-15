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

// ^ PREFERENZE DI SVOLGIMENTO
// ^ Ho scelto di creare due variabili di controllo ('div3' e 'div5') per rendere il codice più leggibile
// ^ Ho scelto di utilizzare 'else if' e stringere i controlli per assegnare il valore ad 'output' una sola volta anche in caso fosse divisibile sia per 3 che per 5
// ^ Ho scelto di distinguere la variabile 'num' dalla variabile 'output' anche se con i controlli stretti non era necessario,
// ^    perchè semanticamente non mi piaceva assegnare una stringa alla variabile num

// ! ELABORAZIONE
// PER OGNI numero da 1 a 100 (indice: da 0 a 99)
for (let i = 0; i < 100; i++) {
  // dichiaro per comodità una variabile numero e assegno il valore del numero corrente (indice + 1)
  // dichiaro la variabile direttamente all'interno del for perchè fuori non mi serve
  let num = i + 1;

  // dichiaro una variabile output e assegno il valore di default del numero corrente
  // dichiaro la variabile direttamente all'interno del for perchè fuori non mi serve
  let output = num;

  // creo due costanti per leggere meglio i seguenti if: una per validare se il numero è divisibile per 3 e una per validare se il numero è divisibile per 5
  const div3 = num % 3 === 0;
  const div5 = num % 5 === 0;

  // SE il numero corrente è divisibile per 3 e non per 5 (così non continuo a sovrascrivere la variabile output) assegno alla stringa di output il valore 'Fizz'
  if (div3 && !div5) {
    output = "Fizz";
  }

  // SE il numero corrente è divisibile per 5 e non per 3 (così non continuo a sovrascrivere la variabile output) assegno alla stringa di output il valore 'Buzz'
  else if (div5 && !div3) {
    output = "Buzz";
  }

  // SE il numero corrente è divisibile per 3 e divisibile per 5 assegno alla stringa di output il valore 'FizzBuzz'
  else if (div3 && div5) {
    output = "FizzBuzz";
  }

  // ! OUTPUT
  // STAMPO la stringa di output all'interno del ciclo per farla stampare ogni volta
  console.log(output);
}
