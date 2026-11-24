# StudentFinance
O aplicație web pentru gestionarea financiară a unei asociații studențești, destinată urmăririi cheltuielilor, deconturilor și veniturilor.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars |
| status | boolean | toggled from the list, default false (Paid/Pending) |
| type | fixed values | Expense, Income, Reimbursement |
| category | relation | Projects, Logistics, PR, Administrative |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Cumpărat materiale promoționale, active, Expense
2. Decont deplasare conferință, done, Reimbursement
3. Încasare taxă membru, active, Income

## How to run
Open index.html in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| --- | --- |
| ChatGPT / Gemini | CSS Grid layout & dark theme variables, stage 1 |

Details per stage: see the `ai-log/` folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `tranzactii.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 4: components
The list is rendered from data through two components:
`TranzactieList` receives the array and renders one card per item, showing a message if empty.
`TranzactieCard` receives a single transaction through props and displays its details.

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load
and shows a loading state and an error state.
 npm run api # terminal 1, http://localhost:3001
 npm run dev # terminal 2, http://localhost:5173

## Stage 7: form and validation
Tasks can be added from the page. The form is controlled and validated,
and every change (add, toggle, delete) goes to the API before it shows up
in the list.

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/tasks/:id`,
and an about page, plus a 404 page. Component styles moved to CSS Modules.

# Stage 9: own backend
json-server is gone. The API is an Express server in `backend/`, with REST
routes, server side validation and CORS. Data is still kept in memory and
resets on restart.
# How to run
 cd backend & npm install & npm run dev # terminal 1, port 3001
 cd frontend & npm install 

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [X] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [x] Stage 9: own backend with Express
- [ ] Stage 10: MariaDB and full CRUD