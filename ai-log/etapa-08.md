# Stage 6: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Splitting the single-page view into multiple routes using react-router-dom (BrowserRouter, Routes, Route, Outlet, NavLink, Link, useParams), creating a detail page with dynamic ID fetching and 404 handling, and migrating component styles from a global CSS file to CSS Modules.

## Key requests

### 1. Client-Side Routing & Shared Layout
- **Asked:** How to configure multi-page navigation without full page reloads and share the header/footer across all views.
- **Got:** Wrapped <App /> in <BrowserRouter> inside main.jsx, defined nested routes in App.jsx (/, /tranzactii/:id, /despre, *), and created Layout.jsx using <NavLink end> for active link highlighting and <Outlet /> for rendering child pages.

### 2. Dynamic Detail Page & Error Handling (TranzactieDetaliuPage.jsx)
- **Asked:** How to read the transaction ID from the URL, fetch its details from the mock API, and handle non-existent IDs.
- **Got:** Added fetchTranzactie(id) to api.js and built TranzactieDetaliuPage.jsx using useParams() and useEffect(..., [id]) to load the single item and display a clear 404 error message with a back link when the server returns an error.

### 3. Modularizing Styles with CSS Modules
- **Asked:** How to split App.css into component-scoped stylesheets without breaking global theme variables or shared utility classes.
- **Got:** Renamed App.css to index.css keeping only CSS variables (--bg, --card, --accent, dark theme) and shared classes (.panel, .btn, .btn-danger, .badge, .error), and created .module.css files alongside each component and page.