# Stage 2: AI log

## Tools
- ChatGPT / Gemini

## Conversations
- Stage 2 data logic implementation in plain JavaScript (immutable operations, array methods, validations, console logs)

## Key requests

### 1. Data Structure & Immutable Array Logic
- **Asked:** How to implement immutable functions for adding, toggling, and deleting transactions from an array of objects.
- **Got:** Functions using `map`, `filter`, and the spread operator (`...`) to return new array references instead of mutating in place.

### 2. ID Generation & Data Validation
- **Asked:** How to generate a unique ID safely and validate input fields before adding an item.
- **Got:** A helper function using `reduce` (`Math.max(...) + 1`) and validation checks for empty titles and fixed tag values.

## What I learned / what did not work
- Understood why immutability is crucial for modern frameworks like React (comparing references instead of values).
- Practiced array manipulation using `map`, `filter`, and `reduce` without mutating the original state array.