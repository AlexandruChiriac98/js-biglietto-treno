

const PrezzoKm = 0.21;
const Eta = parseInt(prompt("Inserisci Età"));
const ScontoMinorenni = PrezzoKm - ( PrezzoKm * 20 / 100 );
const ScontoOver = PrezzoKm - ( PrezzoKm * 40 / 100 );
const Percorso = parseInt(prompt("inserisci distanza"));
let Prezzo;
console.log(ScontoMinorenni, ScontoOver, Eta, Percorso, PrezzoKm);

if( Eta < 18 ) {
    Prezzo = ScontoMinorenni * Percorso;
    console.log(Prezzo);
}else if( 18 >= Eta && Eta <= 65 ) {
    Prezzo = PrezzoKm * Percorso;
    console.log(Prezzo);
}else if( Eta > 65 ) {
    Prezzo = ScontoOver * Percorso;
    console.log(Prezzo);
}

console.log(Prezzo);
const h2Prezzo = document.getElementById("PrezzoTot");
h2Prezzo.innerHTML = Prezzo;


