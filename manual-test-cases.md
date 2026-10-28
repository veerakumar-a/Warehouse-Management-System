# Manual Test Cases

| ID | Area | Steps | Expected result |
|---|---|---|---|
| TC-01 | Login | Open login, enter a display name, choose Admin and submit | Dashboard opens and role/name are shown |
| TC-02 | Logout | Select Log out | Session is cleared and login page opens |
| TC-03 | Inventory add | Add a product with a unique ID/SKU and non-negative values | Product appears and dashboard totals update |
| TC-04 | Duplicate product | Add a product using an existing ID or SKU | Save is blocked with an error |
| TC-05 | Inventory quantity edit | Edit an existing product and alter quantity | Quantity edit is blocked; use movement pages |
| TC-06 | Product deletion | Delete an unlinked product after confirmation | Product is removed from catalogue |
| TC-07 | Low-stock indicator | Set/receive quantity at or below minimum | Low-stock status and dashboard alert update |
| TC-08 | Inward receipt | Receive positive quantity with unique transaction ID | Quantity increases and inward history is saved |
| TC-09 | Duplicate inward | Submit same transaction ID again | Duplicate is rejected |
| TC-10 | Outward dispatch | Dispatch less than or equal to available quantity | Quantity decreases and history is saved |
| TC-11 | Insufficient stock | Attempt to dispatch more than available quantity | Dispatch is rejected; quantity unchanged |
| TC-12 | Vehicle entry/exit | Register a visit, mark entry, then exit | Status and timestamps change accordingly |
| TC-13 | Employee task assignment | Create task assigned to an existing employee | Task appears and employee task count updates |
| TC-14 | Task completion | Mark an open task complete | Completion date/status and dashboard update |
| TC-15 | Location assignment | Add a unique location and set a product location | Location report reflects linked products |
| TC-16 | Capacity validation | Edit location capacity below linked stock | Save is rejected |
| TC-17 | Supplier linkage | Try deleting supplier linked to product | Deletion is blocked until links are updated |
| TC-18 | Reports | Select each report type and date range | Table uses matching saved records |
| TC-19 | CSV export | Export inventory or report | Downloaded CSV has headers and escaped cells |
| TC-20 | JSON backup | Export backup from Settings | Valid JSON containing application records downloads |
| TC-21 | JSON restore | Restore a valid backup, then try malformed JSON | Valid backup restores; invalid file leaves current data unchanged |
| TC-22 | Persistence | Change a record and refresh | Change remains saved in same browser profile |
| TC-23 | Notifications | Mark alert read, refresh, clear read alerts | Read state persists and cleared alerts disappear |
| TC-24 | Responsive UI | Test at desktop, tablet and mobile widths | Navigation and tables remain usable; sidebar toggles on mobile |
| TC-25 | Print | Open a report and use Print report | Print layout hides navigation and controls |

Note: these are manual test cases. Browser-specific visual testing is still recommended before real-world use.
