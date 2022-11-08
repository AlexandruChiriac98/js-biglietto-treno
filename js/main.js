

const PrezzoKm = parseInt(0.21);
const Eta = parseInt(prompt("Inserisci Età"));
const ScontoMinorenni = parseInt(PrezzoKm - ( PrezzoKm * 20 / 100 ));
const ScontoOver = parseInt(PrezzoKm - ( PrezzoKm * 40 / 100 ));
const Percorso = parseInt(prompt("inserisci distanza"));
let Prezzo;

if( Eta < 18 ) {
    Prezzo = ScontoMinorenni * Percorso;
}else if( 18 >= Eta && Eta <= 65 ) {
    Prezzo = PrezzoKm * Percorso;
}else {
    Prezzo = ScontoOver * Percorso;
}

console.log(Prezzo);
const h2Prezzo = document.getElementById("PrezzoTot");
h2Prezzo.innerHTML = Prezzo;


