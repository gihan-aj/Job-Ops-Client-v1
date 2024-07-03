# Job Ops Management Client (Angular 17)

This Angular app is designed to work with the Job Operations Management System API. The app focuses on creating user-friendly components and interfaces to manage job operations effectively. The current implementation includes a comprehensive table component with functionalities for editing, deleting, activating, and deactivating departments, along with bulk actions and pagination.

## What I Learned
* **Angular Development:** Enhanced skills in building Angular applications with complex components.
* **Component-Based Architecture:** Developed reusable and comprehensive components.
* **PrimeNG and PrimeFlex:** Gained experience in using PrimeNG for UI components and PrimeFlex for responsive design.
* **API Integration:** Implemented functionality to interact with the Job Operations Management System API.
* **User Interface Design:** Focused on creating intuitive and user-friendly interfaces.

## Features
* **Comprehensive Table Component:** A versatile table component with options for editing, deleting, activating, and deactivating individual rows. It also supports bulk actions and indicates the activation status of each row.
* **Search Bar:** Search dynamically through data by ID or name.
* **Pagination Bar:** Switch through pages and set different page sizes
* **Modals:** Add, and edit data from popup windows
* **PrimeNG and PrimeFlex:** Utilizes PrimeNG component library and PrimeFlex CSS library for building responsive and feature-rich interfaces.

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
  ```Bash
  npm install

  ```
4. Run the application for a dev server.  Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
  ```Bash
  ng serve

  ```
## Usage
### Department Management
* **Search Bar:** Allows users to search departments by name.
* **Add button:** Opens a form to add a new department.
* **Table Component:** Displays a list of departments with pagination. Each row has options to edit, delete, activate, or deactivate the department.
* **Bulk Actions:** Select multiple rows to perform bulk delete, activate, or deactivate actions.

### Table Component
* **Edit:** Click the edit button to modify the department details.
* **Delete:** Click the delete button to soft delete a department.
* **Activate/Deactivate:** Click the activate/deactivate button to change the activation status of a department.
* **Bulk Actions:** Select multiple rows and use the bulk action buttons to delete, activate, or deactivate selected departments.
* **Example Usage:**
  ```HTML
  <app-table
    [loadingInProgress]="loadingInProgress"
    [headers]="headers"
    [data]="departments"
    [tableOptions]="tableOptions"
    [totalDataCount]="dataCount"
    [page]="page"
    [pageSize]="pageSize"
    [pageSizeOptions]="pageSizeOptions"
    (pageChanged)="onPageChange($event)"
    (onEdit)="onEdit($event)"
    (onDelete)="onDelete($event)"
    (onActivate)="onActivate($event)"
    (onDeactivate)="onDeactivate($event)"
  ></app-table>
  ```
* **UI:**
![Alt text](https://github.com/gihan-aj/Job-Ops-Client-v2/blob/main/public/assets/images/register.png "Department UI")
### PrimeNG and PrimeFlex
* [**PrimeNG:**](https://primeng.org) Used for advanced UI components like tables, dialogs, and buttons.
* [**PrimeFlex:**](https://primeflex.org) Used for responsive layout and styling.
