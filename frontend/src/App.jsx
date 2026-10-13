const tranzactii = [
  { id: 1, titlu: "Cumpărat materiale promoționale", achitat: false, tip: "cheltuiala" },
  { id: 2, titlu: "Decont deplasare conferință", achitat: true, tip: "decont" },
  { id: 3, titlu: "Încasare taxă membru", achitat: false, tip: "venit" }
];

export default function App() {
  // Calculăm numărul de tranzacții neachitate
  const active = tranzactii.filter((t) => !t.achitat).length;

  return (
    <>
      <header className="app-header">
        <h1>StudentFinance</h1>
        <p>Sistem pentru gestionarea financiară a asociației studențești.</p>
        <p className="app-count">
          {tranzactii.length} tranzacții, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Tranzacții recente</h2>
          {/* Afișare temporară ca text JSON (Etapa 4 va adăuga cardurile) */}
          <pre>{JSON.stringify(tranzactii, null, 2)}</pre>
        </section>
      </main>

      <footer className="app-footer">
        <p>Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}