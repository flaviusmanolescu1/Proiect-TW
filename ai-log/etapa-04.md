# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Breaking down the UI into React components, passing props, and conditional rendering for empty states.

## Key requests

### 1. Component Architecture & Props
- **Asked:** How to structure `TranzactieCard.jsx` and `TranzactieList.jsx` using props and `map`.
- **Got:** Destructured props implementation and card mapping with unique `key={tranzactie.id}`.
- **Changed or rejected:** Adapted names to `TranzactieCard` and `TranzactieList` to fit the StudentFinance theme.

### 2. Conditional Rendering
- **Asked:** How to display an empty list message conditionally in React.
- **Got:** Early return pattern checking if `tranzactii.length === 0`.
