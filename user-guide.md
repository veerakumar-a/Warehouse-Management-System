# User Guide

## Start
Open `index.html` with VS Code Live Server, choose Open workspace, then choose Admin, Supervisor or Employee and enter a display name. The app seeds fictional demo data on first launch.

## Dashboard
Review calculated stock totals, low/out-of-stock products, inventory valuation, today's movements, vehicles inside, employee totals and task statuses. Use quick-action links to open common workflows.

## Inventory
Use Add product to create a catalogue record. Product ID and SKU must be unique. Edit non-quantity details here. To preserve stock history, change quantities only through Stock inward or Stock outward. CSV export follows the current filters.

## Stock inward/outward
Create a unique transaction ID. Inward increases the selected product quantity. Outward reduces it only when enough stock is available. Include reference/destination and responsible person for traceability.

## Vehicles
Add a visit record with registration, driver, purpose and expected departure. Use Mark entry/Mark exit to record manual gate movements. No GPS tracking is performed.

## Employees and tasks
Maintain fictional employee records. Assign tasks, set priority and deadline, and use Complete when finished. The dashboard and task performance report recalculate from saved records.

## Locations and suppliers
Create unique location IDs and supplier IDs. Move product location references from Inventory. A location or supplier linked to a product cannot be deleted until links are updated. Capacity is an approximate unit count.

## Reports and notifications
Select a report type and date range, download CSV or print. Notifications can be marked read or cleared after reading.

## Settings and backups
Set the warehouse display name, export a JSON backup, or restore a compatible backup. Restore replaces current records after validation and confirmation. Reset returns the app to sample data.

## Roles and privacy
Role-specific controls are client-side demonstration behavior only. All sample contacts are fictional. Avoid real personal or confidential data.
