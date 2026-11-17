import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found">
      <h2>Pagina nu există (404)</h2>
      <p className="info">Adresa cerută nu duce nicăieri.</p>
      <Link to="/">← Înapoi la tranzacții</Link>
    </section>
  );
}