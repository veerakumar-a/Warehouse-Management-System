# Warehouse Management System — Inventory, Vehicle and Employee Tracking

A responsive, multi-page educational warehouse operations application built with **HTML5, CSS3, vanilla JavaScript and browser LocalStorage**. No framework, backend, database, npm install or build step is required.

## Features
- Role-select demo sign-in for Admin, Supervisor and Employee.
- Live dashboard metrics for inventory, stock movement, vehicles, employees and tasks.
- Product catalogue with unique IDs/SKUs, search, stock indicators, valuation and CSV export.
- Stock inward and outward workflows that update quantities and preserve transaction history. Outward movement blocks insufficient stock.
- Manual vehicle visit register with scheduled/inside/exited states and overdue departure alerts. This is **not GPS tracking**.
- Employee directory, task assignment/status, warehouse locations and supplier records.
- Reports with date filtering for transactions, CSV export and print layout.
- Notifications with read/unread state, JSON backup/restore, settings and demo reset.
- Responsive layout, reusable forms, confirmation prompts, accessible labels and escaped CSV fields.

## Run in VS Code
1. Extract `Warehouse-Management-System.zip`.
2. Open the `Warehouse-Management-System` folder in VS Code.
3. Install/use the **Live Server** extension, if available.
4. Right-click `index.html` → **Open with Live Server**. Alternatively, serve this folder with any simple static HTTP server.
5. Select **Open workspace**, then sign in using a display name and role.

Do not open pages using `file://` if your browser restricts local resources; a local web server is recommended.

## Demo sign-in
There are no passwords in this demo. Choose a role and enter any display name:
- **Admin** — demo controls for all modules.
- **Supervisor** — operational edit controls.
- **Employee** — task and movement views; some navigation and edit controls are hidden.

**Security warning:** this is frontend-only role gating and is not secure authentication or authorization. A user can inspect or alter client-side JavaScript and LocalStorage. Do not deploy for real operations or store real passwords, sensitive personal information or confidential business records.

## Data and persistence
The first launch seeds fictional example records. Data is saved under `wms_`-prefixed LocalStorage keys in the current browser profile. Refreshing the page preserves changes. Different browsers, profiles and devices have separate data. Clearing browser site data can erase records. Use Settings → Export JSON backup before important changes. Restore validates the schema and product quantities before replacing current records.

## Project structure
```text
Warehouse-Management-System/
├── index.html, login.html, dashboard.html
├── inventory.html, stock-inward.html, stock-outward.html
├── vehicles.html, employees.html, tasks.html, locations.html, suppliers.html
├── reports.html, notifications.html, settings.html
├── assets/images/ and assets/icons/
├── css/   shared base, layout, forms, tables, components, responsive and module styles
├── js/    storage, data, auth, navigation, utilities, shared app and page controllers
├── docs/  overview, user guide, testing guide, future enhancements
├── tests/ manual test cases
└── README.md
```

## Suggested test order
1. Sign in as Admin and inspect Dashboard seeded metrics.
2. Add a product, then receive stock and confirm quantity/value change.
3. Dispatch a quantity within stock, then attempt an excessive dispatch and confirm it is blocked.
4. Register a vehicle, mark entry and exit, and check status/history.
5. Create a task, assign an employee, then mark complete and inspect dashboard counts.
6. Export inventory CSV and create a JSON backup; test restore with a valid backup.
7. Use the reports date filters and print preview.
8. Refresh and confirm data persists; test mobile width and sidebar.

## Limitations
- LocalStorage is local to one browser profile; there is no shared multi-user database or synchronization.
- Authentication and roles are for demonstration only.
- Vehicle movement is manually entered; there is no GPS, RFID, barcode scanner or gate hardware integration.
- Location capacity uses simple unit counts and does not model dimensions/weight.
- Notifications are derived from current records and duplicate source alerts are suppressed; this is not a background notification service.
- Some workflows are intentionally simplified for a beginner-friendly college project.

See `docs/` and `tests/manual-test-cases.md` for more detail.
