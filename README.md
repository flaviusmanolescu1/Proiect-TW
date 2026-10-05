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

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript