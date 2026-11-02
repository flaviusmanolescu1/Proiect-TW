import { useEffect, useState } from "react";
import TranzactieList from "./components/TranzactieList.jsx";
import { fetchTranzactii } from "./api.js";
import "./App.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // Stări pentru datele primite de la API
  const [tranzactii, setTranzactii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchTranzactii();
        if (!ignore) setTranzactii(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

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

          {loading && <p className="info">Se încarcă tranzacțiile...</p>}

          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>
            </p>
          )}

          {!loading && !error && (
            <TranzactieList 
              tranzactii={tranzactii} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}