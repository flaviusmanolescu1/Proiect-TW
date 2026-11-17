const ETICHETE_TIP = {
  cheltuiala: "💸 Cheltuială",
  decont: "✈️ Decont",
  venit: "💰 Venit"
};

export default function TranzactieCard({ tranzactie, onToggle, onDelete }) {
  return (
    <li
      className={tranzactie.achitat ? "item-card done" : "item-card"}
      data-testid="item"
      data-id={tranzactie.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={tranzactie.achitat}
          onChange={() => onToggle(tranzactie.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{tranzactie.titlu}</h3>
          <span className={`badge badge-${tranzactie.tip}`}>
            {ETICHETE_TIP[tranzactie.tip] || tranzactie.tip}
          </span>
        </div>
      </label>

      <button
        className="btn-danger"
        onClick={() => onDelete(tranzactie.id)}
        aria-label={`Șterge ${tranzactie.titlu}`}
        data-testid="item-delete"
      >
        🗑️ Șterge
      </button>
    </li>
  );
}

