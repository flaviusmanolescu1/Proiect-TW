import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTranzactie } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./TranzactieDetaliuPage.module.css";

export default function TranzactieDetaliuPage() {
  const { id } = useParams();
  const [tranzactie, setTranzactie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchTranzactie(id)
      .then((data) => {
        if (!ignore) {
          setTranzactie(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Tranzacția nu a putut fi încărcată: {error}
        </p>
        <Link to="/">← Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>

      <h2
        className={tranzactie.achitat ? styles.done : undefined}
        data-testid="detail-title"
      >
        {tranzactie.titlu}
      </h2>

      <dl className={styles.fields}>
        <dt>Tip</dt>
        <dd>
          <span className={`badge badge-${tranzactie.tip}`}>
            {ETICHETE_TIP[tranzactie.tip] || tranzactie.tip}
          </span>
        </dd>

        <dt>Status</dt>
        <dd>{tranzactie.achitat ? "Achitat" : "În așteptare (Activ)"}</dd>

        <dt>ID înregistrare</dt>
        <dd>#{tranzactie.id}</dd>
      </dl>
    </section>
  );
}