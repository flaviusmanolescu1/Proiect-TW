import { useEffect, useState } from "react";
import TranzactieList from "./components/TranzactieList.jsx";
import TranzactieForm from "./components/TranzactieForm.jsx";
import {
  createTranzactie,
  deleteTranzactie,
  fetchTranzactii,
  updateTranzactie,
} from "./api.js";
import "./App.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [tranzactii, setTranzactii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

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

  // Întâi serverul, apoi state-ul (eroarea urcă în formular)
  async function handleAdd(tranzactie) {
    const creata = await createTranzactie(tranzactie);
    setTranzactii((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const tranzactie = tranzactii.find((t) => t.id === id);
    try {
      const actualizata = await updateTranzactie(id, {
        achitat: !tranzactie.achitat,
      });
      setTranzactii((prev) =>
        prev.map((t) => (t.id === id ? actualizata : t))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTranzactie(id);
      setTranzactii((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
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
          <strong>{tranzactii.length}</strong> tranzacții, dintre care{" "}
          <strong>{active}</strong> active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Adaugă tranzacție</h2>
          <TranzactieForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Tranzacții recente</h2>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă tranzacțiile...
            </p>
          )}

          {error && (
            <p className="error" data-testid="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && (
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