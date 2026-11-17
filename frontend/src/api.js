export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}

export function fetchTranzactii() {
  return request("/tranzactii");
}

export function createTranzactie(tranzactie) {
  return request("/tranzactii", {
    method: "POST",
    body: JSON.stringify(tranzactie),
  });
}

export function updateTranzactie(id, changes) {
  return request(`/tranzactii/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteTranzactie(id) {
  return request(`/tranzactii/${id}`, {
    method: "DELETE",
  });
}