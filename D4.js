/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  const result = l1 * l2;
  return result;
}

const total = area(5, 3);
console.log(total);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x, y) {
  if (x !== y) {
    const sum = x + y;
    return sum;
  } else {
    const sumMT = (x + y) * 2;
    return sumMT;
  }
}

const total2 = crazySum(3, 3);
console.log(total2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numF = 19;
function crazyDiff(x) {
  if (x < 18) {
    const diffA = x - numF;
    const diffA1 = Math.abs(diffA);
    return diffA1;
  } else {
    const diffB = (x - numF) * 3;
    const diffB1 = Math.abs(diffB);
    return diffB1;
  }
}
const totalDiff = crazyDiff(2);
console.log(totalDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    const result = true;
    return result;
  } else {
    const noResult = false;
    return noResult;
  }
}
const resultBoolean = boundary(400);
console.log(resultBoolean);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const wordHead = "EPICODE";
function epify(phrase) {
  if (phrase != wordHead) {
    const result = `${wordHead} ${phrase}`;
    return result;
  } else {
    const resulutSame = phrase;
    return resulutSame;
  }
}
const newPhrase = epify("ciao");
console.log(newPhrase);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    const result = `${x} è multiplo di 3 o 7`;
    return result;
  } else {
    const noResult = `${x} non è multiplo di 3 o 7`;
    return noResult;
  }
}
const check = check3and7(21);
console.log(check);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(word) {
  const newWord = [];
  const phrase = word.split("");
  for (let i = 0; i < phrase.length; i++) {
    newWord.unshift(phrase[i]);
  }
  const newPhrase = newWord.join("");
  return newPhrase;
}

const newPhrase1 = reverseString("Piero");
console.log(newPhrase1);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(phrase) {
  const arrPhrase = phrase.split(" ");
  const allFirstUp = [];
  for (let i = 0; i < arrPhrase.length; i++) {
    let firstChar = arrPhrase[i].charAt(0)
    let uppercase = firstChar.toUpperCase()
    let cutStr = arrPhrase[i].slice(1);
    let finalWord = uppercase + cutStr;
    allFirstUp.push(finalWord);
  }

  console.log(allFirstUp.join(' '))
  

}
upperFirst("piero si sposa");


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(word) {
  const arrPhrase = word.split("");
  let first = null;
  let last = null;
  for (let i = 0; i < arrPhrase.length; i++) {
    const lastElement = arrPhrase.length - 1;
    if (i === 0) {
      first = arrPhrase[i];
    } else if (i === lastElement) {
      last = arrPhrase[i];
    }
  }
  const newWord = [];
  for (let j = 0; j < arrPhrase.length; j++) {
    if (arrPhrase[j] !== first && arrPhrase[j] !== last) {
      newWord.push(arrPhrase[j]);
    }
  }
  const newPhrase = newWord.join("");
  return newPhrase;
}
const newCutString = cutString("albergo");
console.log(newCutString);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const arrRandomN = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * 10);
    arrRandomN[i] = random;
  }
  return arrRandomN;
}
const newArrRandom = giveMeRandom(21);
console.log(newArrRandom);
