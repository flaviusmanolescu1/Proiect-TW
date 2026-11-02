# Stage 6: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Moving local state initialization to an external mock REST API (json-server), handling asynchronous data fetching with useEffect and fetch, and managing loading/error states.

## Key requests

### 1. Mock API & Data Setup
- **Asked:** How to install and configure json-server for a custom resource (tranzactii).
- **Got:** Installed json-server@0.17.4, created frontend/db.json with initial entries, and added "api": "json-server --watch db.json --port 3001" script to package.json.

### 2. Centralized Fetch & Environment Variables
- **Asked:** How to isolate HTTP requests and read the server URL dynamically.
- **Got:** Created 'src/api.js' exporting fetchTranzactii() with res.ok validation and fallback to 'http://localhost:3001' via import.meta.env.VITE_API_URL. Documented variable in .env.example.

### 2. Centralized Fetch & Environment Variables
- **Asked:** How to fetch data on component mount without state update race conditions.
- **Got:** Implemented useEffect inside App.jsx using an internal async function load() and an ignore boolean flag for cleanup to safely set tranzactii, loading, and error states.