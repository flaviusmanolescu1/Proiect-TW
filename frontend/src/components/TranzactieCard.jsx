const ETICHETE_TIP = {
  cheltuiala: "Cheltuială",
  decont: "Decont",
  venit: "Venit"
};

export default function TranzactieCard({ tranzactie, onToggle, onDelete }) {
  return (
    <li className={tranzactie.achitat ? "item-card done" : "item-card"}>
      {/* Eticheta label permite click pe întreg textul pentru a bifa */}
      <label className="task-main">
        <input
          type="checkbox"
          checked={tranzactie.achitat}
          onChange={() => onToggle(tranzactie.id)}
        />
        <div>
          <h3>{tranzactie.titlu}</h3>
          <span className={`badge badge-${tranzactie.tip}`}>
            {ETICHETE_TIP[tranzactie.tip] || tranzactie.tip}
          </span>
        </div>
      </label>

      {/* Butonul de ștergere apelează funcția doar la onClick (într-o funcție săgeată) */}
      <button
        className="btn-danger"
        onClick={() => onDelete(tranzactie.id)}
        aria-label={`Șterge ${tranzactie.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}