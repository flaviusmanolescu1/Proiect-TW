export default function App() {
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
          <pre>{JSON.stringify(tranzactii, null, 2)}</pre>
        </section>
      </main>

      <footer className="app-footer">
        <p>Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}