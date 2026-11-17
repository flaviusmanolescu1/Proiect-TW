# Stage 6: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Moving local state initialization to an external mock REST API (json-server), handling asynchronous data fetching with useEffect and fetch, and managing loading/error states.

## Key requests

### 1. CRUD API Helpers & Shared Request Function
- **Asked:** How to avoid repeating headers and error handling across POST, PATCH, and DELETE requests in api.js.
- **Got:** Created a centralized request(path, options) helper that sets JSON headers, validates res.ok, handles 204 No Content responses, and powers createTranzactie, updateTranzactie, and deleteTranzactie.

### 2. Controlled Form & Validation (TranzactieForm.jsx)
- **Asked:** How to build a controlled form that validates user input, prevents double submission, and preserves text on server errors.
- **Got:** Built TranzactieForm with useState for titlu, tip, eroare, and trimite (submitting flag), e.preventDefault(), custom validation (valideaza()), and clearing fields only after await onAdd(...) resolves.

### 3. Server-First State Updates in App.jsx
- **Asked:** How to persist additions, toggles, and deletions across page reloads.
- **Got:** Updated handleAdd, handleToggle, and handleDelete to await API responses before updating React state with the server-returned objects (including server-generated id).

### 4. Automated Verification Setup (tw.json & data-testid)
- **Asked:** Where to place data-testid attributes and how to configure tw.json for the StudentFinance resource.
- **Got:** Created tw.json in the repository root with "resource": "tranzactii", "title": "titlu", "done": "achitat", and added data-testid attributes across TranzactieForm, TranzactieCard, TranzactieList, and App.