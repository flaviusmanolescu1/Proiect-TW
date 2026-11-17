import { Link } from "react-router-dom";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./TranzactieCard.module.css";

export default function TranzactieCard({ tranzactie, onToggle, onDelete }) {
  return (
    <li
      className={tranzactie.achitat ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={tranzactie.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={tranzactie.achitat}
          onChange={() => onToggle(tranzactie.id)}
          aria-label={`Marchează ${tranzactie.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/tranzactii/${tranzactie.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {tranzactie.titlu}
          </Link>
          <span className={`badge badge-${tranzactie.tip}`}>
            {ETICHETE_TIP[tranzactie.tip] || tranzactie.tip}
          </span>
        </div>
      </div>

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