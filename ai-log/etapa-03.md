# Stage 3: AI log

## Tools
- Gemini

## Conversations
- React project setup using Vite, CSS migration, JSX structure, and resolving PowerShell ExecutionPolicy issue.

## Key requests
### 1. PowerShell Script Execution Error
- **Asked:** How to resolve `npm.ps1 cannot be loaded because running scripts is disabled`.
- **Got:** `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` command to allow running npm scripts.

### 2. React & Vite Initialization
- **Asked:** How to structure `App.jsx` to render dynamic data counters and raw JSON.
- **Got:** JSX setup importing `App.css` and computing active transaction states.
