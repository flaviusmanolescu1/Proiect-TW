import { Router } from "express";
import { parseId, valideazaTranzactie } from "../validation.js";

const router = Router();

let tranzactii = [
  { id: 1, titlu: "📦 Cumpărat materiale promoționale", achitat: false, tip: "cheltuiala" },
  { id: 2, titlu: "🎟️ Decont deplasare conferință", achitat: true, tip: "decont" },
  { id: 3, titlu: "💳 Încasare taxă membru", achitat: false, tip: "venit" },
];

let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }

  const index = tranzactii.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Tranzacția nu există" });
    return -1;
  }

  return index;
}


router.get("/", (req, res) => {
  res.json(tranzactii);
});

// GET /tranzactii/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(tranzactii[index]);
});


router.post("/", (req, res) => {
  const { erori, date } = valideazaTranzactie(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  const tranzactie = { id: nextId++, ...date };
  tranzactii.push(tranzactie);
  res.status(201).json(tranzactie);
});


router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  const { erori, date } = valideazaTranzactie(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  tranzactii[index] = { ...tranzactii[index], ...date };
  res.json(tranzactii[index]);
});


router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  tranzactii.splice(index, 1);
  res.status(204).end();
});

export default router;