import { useState } from "react";
import { TIPURI } from "../constants.js";
import styles from "./TranzactieForm.module.css";

const TITLU_MAX = 100;

export default function TranzactieForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [tip, setTip] = useState("cheltuiala");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul tranzacției este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({ titlu: titlu.trim(), tip, achitat: false });
      setTitlu("");
      setTip("cheltuiala");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu tranzacție
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: 📦 Achiziție bannere"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Tip tranzacție
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          data-testid="form-tip"
        >
          {TIPURI.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă tranzacția"}
      </button>
    </form>
  );
}