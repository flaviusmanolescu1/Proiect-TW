# Stage 1: AI log

## Tools
- ChatGPT / Gemini

## Conversations
- Stage 1 static mockup layout (HTML structure, CSS Grid, Flexbox, focus states, dark theme variables)

## Key requests

### 1. Page Layout & Responsiveness
- **Asked:** How to construct a 2-column layout on desktop using CSS Grid and make it responsive for narrow screens under 700px.
- **Got:** Suggestions using `display: grid; grid-template-columns: 1fr 2fr;` and a `@media (max-width: 700px)` breakpoint setting `grid-template-columns: 1fr;`.

### 2. Accessible Focus & Dark Theme
- **Asked:** How to set up CSS custom properties (variables) for dark mode and implement a visible focus outline for keyboard navigation.
- **Got:** `:focus-visible` rule with `outline` and `@media (prefers-color-scheme: dark)` redefining root variables.
