export const TIPURI = ["cheltuiala", "decont", "venit"];
const TITLU_MAX = 100;

export function valideazaTranzactie(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.tip !== undefined) {
    const tip = body.tip ?? "cheltuiala";
    if (!TIPURI.includes(tip)) {
      erori.push(`tip trebuie să fie unul din: ${TIPURI.join(", ")}`);
    } else {
      date.tip = tip;
    }
  }

  if (body.achitat !== undefined) {
    if (typeof body.achitat !== "boolean") {
      erori.push("achitat trebuie să fie true sau false");
    } else {
      date.achitat = body.achitat;
    }
  } else if (!partial) {
    date.achitat = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}