const tranzactii = [
    { id: 1, titlu: "Cumpărat materiale promoționale", achitat: false, tip: "cheltuiala" },
    { id: 2, titlu: "Decont deplasare conferință", achitat: true, tip: "decont" },
    { id: 3, titlu: "Încasare taxă membru", achitat: false, tip: "venit" }
];

const TIPURI_TRANZACTII = ["cheltuiala", "decont", "venit"];

function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
    return lista.filter((t) => !t.achitat).length;
}

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase().trim();
    return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaTranzactie(lista, titlu, tip) {
    const titluCurat = titlu ? titlu.trim() : "";

    // Validare 1: Titlul nu poate fi gol
    if (!titluCurat) {
        console.error("Eroare validare: Titlul nu poate fi gol!");
        return lista;
    }

    // Validare 2: Tipul trebuie să existe în TIPURI_TRANZACTII
    if (!TIPURI_TRANZACTII.includes(tip)) {
        console.error(`Eroare validare: Tip invalid "${tip}". Valori permise: ${TIPURI_TRANZACTII.join(", ")}`);
        return lista;
    }

    const tranzactieNoua = {
        id: nextId(lista),
        titlu: titluCurat,
        achitat: false,
        tip: tip
    };

    return [...lista, tranzactieNoua];
}


function comutaStare(lista, id) {
    return lista.map((t) => (t.id === id ? { ...t, achitat: !t.achitat } : t));
}

function stergeTranzactie(lista, id) {
    return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri tranzacții:", listeazaTitluri(tranzactii).join(", "));
console.log("Tranzacții neachitate (active):", numaraActive(tranzactii));
console.log("Căutare 'decont':", listeazaTitluri(cautaDupaTitlu(tranzactii, "decont")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaTranzactie(tranzactii, "Plată sonorizare eveniment", "cheltuiala");
console.log("Lungime lista nouă:", listaNoua.length, "tranzacții");
console.log("Originalul a rămas cu:", tranzactii.length, "tranzacții (demonstrație imutabilitate)");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După comutare stare id 1, active rămase:", numaraActive(listaNoua));
listaNoua = stergeTranzactie(listaNoua, 3);
console.log("După ștergerea id 3, titluri rămase:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaTranzactie(listaNoua, "", "cheltuiala");
adaugaTranzactie(listaNoua, "Cumpărat papetărie", "urgenta");