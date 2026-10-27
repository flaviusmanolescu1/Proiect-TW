import { useState } from "react";
import TranzactieList from "./components/TranzactieList.jsx";

const TRANZACTII_INITIALE = [
  { id: 1, titlu: "Cumpărat materiale promoționale", achitat: false, tip: "cheltuiala" },
  { id: 2, titlu: "Decont deplasare conferință", achitat: true, tip: "decont" },
  { id: 3, titlu: "Încasare taxă membru", achitat: false, tip: "venit" }
];


function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [tranzactii, setTranzactii] = useState(TRANZACTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setTranzactii((prev) =>
      prev.map((t) => (t.id === id ? { ...t, achitat: !t.achitat } : t))
    );
  }

  function handleDelete(id) {
    setTranzactii((prev) => prev.filter((t) => t.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = tranzactii.filter((t) => !t.achitat).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        
        <h1>StudentFinance</h1>
        <p>Sistem pentru gestionarea financiară a asociației studențești.</p>
        <p className="app-count">
  <strong>{tranzactii.length}</strong> tranzacții, dintre care <strong>{active}</strong> active
</p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Tranzacții recente</h2>
          {/* Transmitem funcțiile către componenta copil */}
          <TranzactieList 
            tranzactii={tranzactii} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}