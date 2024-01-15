// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function palindromControl(parola) {
    
    // Converte la parola in minuscolo per evitare problemi con le maiuscole
    parola = parola.toLowerCase();

    // Converte la parola in un array
    const array = Array.from(parola);

    // Crea un nuovo array invertendo manualmente l'ordine dei caratteri
    const reversedArray = array.map((_, index) => array[array.length - 1 - index]);

    console.log(reversedArray);

    // Confronta la parola originale con quella rovesciata
    return JSON.stringify(array) === JSON.stringify(reversedArray);
}



// Chiede all'utente di inserire una parola
const userInput = prompt("Inserisci una parola:");

// Verifica se la parola inserita è palindroma o meno
if (palindromControl(userInput)) {

    console.log("La parola è palindroma!");

} else {

    console.log("La parola non è palindroma.");
}

// terminato esercizio
