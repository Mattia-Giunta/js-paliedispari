// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//  funzione custom per un numero random da 1 a 5
function randomNumber(min,max) {

    return Math.floor(Math.random() * max) + min;
}
  

// funzione per selezionare il numero inserito dall'utente
function controllaPariDispari() {

    let numeroUtente = parseInt(document.getElementById("numeroUtente").value);
    console.log("il numero inserito dall'utente:", numeroUtente)

    // controllo se l'utente inserisce un numero valido
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {

        alert("Inserisci un numero valido da 1 a 5.");

        return;

    }

    // variabile associata al radio button
    let sceltaUtente = document.querySelector('input[name="scelta"]:checked');

    // controllo se l'utente spunta la casella 
    if (!sceltaUtente) {

        alert("Scegli tra pari o dispari.");

        return;
    }

    sceltaUtente = sceltaUtente.value

    //  variabile random da 1 a 5
    let numeroGenerato = randomNumber(1,5);
    console.log('il numero gengerato random:', numeroGenerato);

    // somma tra il numero messo dall'utente e il numero random
    let somma = numeroUtente + numeroGenerato;
    console.log('somma del numero random e numero inserito:', somma);

    // variabile che stabilisce se la somma è pari o dispari
    let risultato = (somma % 2 == 0) ? 'pari' : 'dispari';
    console.log('la somma dei due numeri è', risultato);

    // condizione che determina se l'utente ha vinto
    if (risultato == sceltaUtente) {

        alert("Hai vinto! La somma è " + risultato + ".");

    } else {

        alert("Hai perso! La somma è " + risultato + ".");
    }
}

// Termianto esercizio