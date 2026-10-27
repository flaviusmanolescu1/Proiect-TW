import TranzactieCard from "./TranzactieCard.jsx";

export default function TranzactieList({ tranzactii, onToggle, onDelete }) {
  if (!tranzactii || tranzactii.length === 0) {
    return <p className="empty">Nu există nicio tranzacție.</p>;
  }

  return (
    <ul className="item-list">
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