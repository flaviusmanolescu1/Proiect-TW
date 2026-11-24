# Stage 6: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Building a custom REST API backend with Node.js and Express (v5) to replace json-server, organizing routes and server-side validation, configuring CORS, and connecting the React frontend to display server error messages.

## Key requests

### 1. Backend Project Structure & Express Setup
- **Asked:** How to initialize the backend/ folder with ES modules and separate the Express app configuration from the server listener.
- **Got:** Created backend/package.json with "type": "module" and node --watch src/server.js, configured .gitignore and .env.example, and separated src/app.js (middleware, CORS, /health, 404, centralized error handler) from src/server.js (app.listen).

### 2. REST Routes & Server-Side Validation (tranzactii.js & validation.js)
- **Asked:** How to implement all five CRUD endpoints (GET, GET /:id, POST, PATCH, DELETE) with strict server-side input validation and proper HTTP status codes (200, 201, 204, 400, 404).
- **Got:** valideazaTranzactie (with partial support for PATCH and whitelist field extraction) and parseId in validation.js, and implemented the /tranzactii router in routes/tranzactii.js using a shared gasesteIndex helper.

### 3. Frontend Integration & Removing json-server
- **Asked:** How to display the custom { error: "..." } messages returned by Express in the React UI and clean up the mock server.
- **Got:** Updated request() in frontend/src/api.js to parse body.error on non-2xx responses, deleted frontend/db.json, removed json-server and the api script from frontend/package.json, and refreshed package-lock.json via npm install.