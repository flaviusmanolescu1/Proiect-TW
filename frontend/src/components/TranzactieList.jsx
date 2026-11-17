import TranzactieCard from "./TranzactieCard.jsx";
import styles from "./TranzactieList.module.css";

export default function TranzactieList({ tranzactii, onToggle, onDelete }) {
  if (tranzactii.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio tranzacție înregistrată.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {tranzactii.map((tranzactie) => (
        <TranzactieCard
          key={tranzactie.id}
          tranzactie={tranzactie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}