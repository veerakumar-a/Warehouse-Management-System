# Testing Guide

Run using VS Code Live Server. Test at desktop and mobile viewport sizes. Start with a fresh browser profile if you need the original seed dataset.

## Validation checklist
- All HTML pages open through the sidebar and relative links.
- Console has no uncaught syntax/runtime errors during ordinary workflows.
- Dashboard values reflect LocalStorage records, not fixed totals.
- Product ID/SKU, supplier ID, employee ID, task ID, location ID and transaction IDs reject duplicates where implemented.
- Negative quantities/prices are rejected; outward transactions cannot exceed stock.
- Confirmed inward/outward transactions update the product balance and history.
- Backup/restore and CSV exports can be opened by common spreadsheet software.
- Print preview hides navigation controls.

See `../tests/manual-test-cases.md` for step-by-step cases.
