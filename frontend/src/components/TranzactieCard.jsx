const ETICHETE_TIP = {
  cheltuiala: "Cheltuială",
  decont: "Decont",
  venit: "Venit"
};

export default function TranzactieCard({ tranzactie }) {
  return (
    <li className={tranzactie.achitat ? "item-card done" : "item-card"}>
      <div>
        <h3>{tranzactie.titlu}</h3>
        <span className={`badge badge-${tranzactie.tip}`}>
          {ETICHETE_TIP[tranzactie.tip] || tranzactie.tip}
        </span>
      </div>
      <span className="status">
        {tranzactie.achitat ? "Achitat" : "În așteptare"}
      </span>
    </li>
  );
}