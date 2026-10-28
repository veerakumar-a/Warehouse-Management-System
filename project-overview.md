# Project Overview

## Purpose
The Warehouse Management System demonstrates core warehouse workflows in a static, browser-based application. It combines inventory, inward/outward transactions, vehicle gate records, employee details, task tracking, locations, suppliers, reports and notifications.

## Objectives
- Maintain a consistent product catalogue and quantity balance.
- Record stock receipts and dispatches with traceable IDs and timestamps.
- Provide operational visibility through calculated dashboard metrics.
- Demonstrate data persistence, export/restore and client-side validation.

## Architecture
HTML pages provide navigation and accessible page landmarks. Shared CSS establishes a consistent responsive design. Shared JavaScript utilities provide LocalStorage access, validation, CSV export, safe text escaping, notifications and modal forms. Page-specific scripts implement module workflows.

## Data model
Products link to suppliers and storage locations; tasks link to employees; inward/outward records reference product IDs; vehicle records capture manual entry/exit timestamps. Data is stored in browser LocalStorage, not a server database.

## Important boundary
This is a teaching/demo project. Client-side login and role restrictions can be bypassed and must not be treated as production security.
