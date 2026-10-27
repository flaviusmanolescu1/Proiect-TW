# Stage 5: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Moving static arrays into React `useState`, passing event handler functions via props, and implementing a theme toggler.

## Key requests

### 1. State Management & Immutable Updates
- **Asked:** How to refactor Stage 2 plain JS functions to work with React's `setTranzactii`.
- **Got:** `prev.map` for toggling `achitat` status and `prev.filter` for deletion, avoiding direct mutations.

### 2. Event Handling in Child Components
- **Asked:** How to bind checkbox changes and button clicks.
- **Got:** Controlled components `<input checked={...} onChange={() => ...} />` and an arrow function for `onClick={() => onDelete(id)}` to prevent immediate firing on render.