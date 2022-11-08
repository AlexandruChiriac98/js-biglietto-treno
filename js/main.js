

const Eta = parseInt(prompt("Inserisci Età"));
const Percorso = parseInt(prompt("inserisci distanza"));
let Prezzo;
console.log(Eta, Percorso, PrezzoKm);

if( Eta < 18 ) {
    Prezzo = (0.21 * Percorso * .8).toFixed(2);
    console.log(Prezzo);
}else if( 18 >= Eta && Eta <= 65 ) {
    Prezzo = (0.21 * Percorso).toFixed(2);
    console.log(Prezzo);
}else if( Eta > 65 ) {
    Prezzo = (0.21 * Percorso * .6).toFixed(2);
    console.log(Prezzo);
}

console.log(Prezzo);
const h2Prezzo = document.getElementById("PrezzoTot");
h2Prezzo.innerHTML = Prezzo;


