export const TIPURI = [
  { value: "cheltuiala", label: "💸 Cheltuială" },
  { value: "decont", label: "✈️ Decont" },
  { value: "venit", label: "💰 Venit" },
];

export const ETICHETE_TIP = Object.fromEntries(
  TIPURI.map((t) => [t.value, t.label])
);