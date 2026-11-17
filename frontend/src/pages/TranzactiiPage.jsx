import { useEffect, useState } from "react";
import TranzactieList from "../components/TranzactieList.jsx";
import TranzactieForm from "../components/TranzactieForm.jsx";
import {
  createTranzactie,
  deleteTranzactie,
  fetchTranzactii,
  updateTranzactie,
} from "../api.js";
import styles from "./TranzactiiPage.module.css";

export default function TranzactiiPage() {
  const [tranzactii, setTranzactii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const active = tranzactii.filter((t) => !t.achitat).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă tranzacție</h2>
        <TranzactieForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Tranzacții recente</h2>
        <p className={styles.summary}>
          <strong>{tranzactii.length}</strong> tranzacții, dintre care{" "}
          <strong>{active}</strong> active
        </p>

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
    </div>
  );
}