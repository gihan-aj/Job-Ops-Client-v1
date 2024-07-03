import { Component, OnDestroy } from '@angular/core';

import { DepartmentsPopupComponent } from './departments-popup/departments-popup.component';

import { DepartmentsService } from '../../services/departments.service';
import { AppSettingsService } from '../../../../core/services/app-settings.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

import { ConfirmationService, Footer, PrimeNGConfig } from 'primeng/api';

import { GetResponse } from '../../../../core/models/get-response';
import { Department } from '../../models/department';
import { TableOptions } from '../../../shared/models/table-options';
import { PageEvent } from '../../../shared/models/page-event';
import { AlertService } from '../../../shared/services/alert.service';

const _headers: string[] = ['id', 'name'];

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent implements OnDestroy {
  constructor(
    private primengConfig: PrimeNGConfig,
    private appSettingsService: AppSettingsService,
    private departmentService: DepartmentsService,
    private confirmationService: ConfirmationService,
    private toastMessageService: ToastMessageService,
    private alert: AlertService
  ) {}

  user!: number;

  baseUrl!: string;

  loadingInProgress: boolean = true;

  headers: string[] = []; // Table Headers

  tableOptions: TableOptions = new TableOptions();

  // Table pagination
  page!: number;
  pageSize!: number;
  pageSizeOptions!: number[];

  // Data
  departments: Department[] = [];
  department: Department = {
    id: '',
    name: '',
    status: true,
  };
  dataCount: number = 0;

  // Popup
  displayAddPopup: boolean = false;
  displayEditPopup: boolean = false;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.headers = _headers;
    this.page = 1;
    this.pageSize = this.appSettingsService.defaultPageSize;
    this.pageSizeOptions = this.appSettingsService.pageSizeOptions;

    this.setTableOptions();

    this.fetchDepartments(this.page, this.pageSize);
  }

  ngOnDestroy() {}

  setTableOptions() {
    this.tableOptions.allowCheckBox = true;
    this.tableOptions.allowEditRow = true;
    this.tableOptions.allowDeleteRow = true;
    this.tableOptions.allowActivationAndDeactivation = true;
  }

  onPageChange(pageEvent: PageEvent) {
    this.page = pageEvent.page;
    this.pageSize = pageEvent.rows;

    this.fetchDepartments(this.page, this.pageSize);
  }

  onSearch($event: string) {
    this.loadingInProgress = true;

    if ($event) {
      this.departmentService
        .getDepartmentsBySearch(this.page, this.pageSize, $event)
        .subscribe({
          next: (data: GetResponse<Department>) => {
            if (data.dataList) this.departments = data.dataList;
            if (data.count) this.dataCount = data.count;
            console.log(this.departments);

            this.loadingInProgress = false;
          },
          error: (error) => {
            console.log(error);

            this.toastMessageService.showError(
              'Error',
              `Data fetching failed!`,
              5000
            );
          },
        });
    } else {
      this.fetchDepartments(this.page, this.pageSize);
    }
  }

  onEdit(rowData: Event) {
    console.log(rowData);

    this.department = rowData as unknown as Department;
    console.log(this.department);

    this.confirmationService.confirm({
      target: rowData.target as EventTarget,
      message: 'Are you sure that you want to edit this record?',
      header: 'Edit Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.displayEditPopup = true;
      },
      reject: () => {
        this.toastMessageService.showWarn('Edit', 'Editing canceled', 3000);
      },
    });
  }

  // Get id array from selected records from the table
  getIds(dataArray: Event): string[] {
    const records: Department[] = dataArray as unknown as Department[];
    return records.map((d) => d.id);
  }

  onDelete(dataArray: Event) {
    console.log(dataArray);

    const ids = this.getIds(dataArray);
    console.log(ids);

    this.confirmationService.confirm({
      target: dataArray.target as EventTarget,
      message: `Are you sure that you want to delete ${
        ids.length > 1 ? 'these records' : 'this record'
      }?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.deleteDepartments(ids);
      },
      reject: () => {
        this.toastMessageService.showWarn('Delete', 'Deletion canceled', 3000);
      },
    });
  }

  onActivate(dataArray: Event) {
    console.log(dataArray);

    const ids = this.getIds(dataArray);
    console.log(ids);

    this.confirmationService.confirm({
      target: dataArray.target as EventTarget,
      message: `Are you sure that you want to activate ${
        ids.length > 1 ? 'these records' : 'this record'
      }?`,
      header: 'Activate Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.activateDepartments(ids);
      },
      reject: () => {
        this.toastMessageService.showWarn(
          'Activate',
          'Activation canceled',
          3000
        );
      },
    });
  }

  onDeactivate(dataArray: Event) {
    console.log(dataArray);

    const ids = this.getIds(dataArray);
    console.log(ids);

    this.confirmationService.confirm({
      target: dataArray.target as EventTarget,
      message: `Are you sure that you want to deactivate ${
        ids.length > 1 ? 'these records' : 'this record'
      }?`,
      header: 'Deactivate Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.deactivateDepartments(ids);
      },
      reject: () => {
        this.toastMessageService.showWarn(
          'Deactivate',
          'Deactivation canceled',
          3000
        );
      },
    });
  }

  onAdd() {
    this.displayAddPopup = true;
    // this.alert.show();
  }

  fetchDepartments(page: number, pageSize: number) {
    this.loadingInProgress = true;

    this.departmentService.getDepartments(page, pageSize).subscribe({
      next: (data: GetResponse<Department>) => {
        if (data.dataList) this.departments = data.dataList;
        if (data.count) this.dataCount = data.count;
        console.log(this.departments);

        this.loadingInProgress = false;
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data fetching failed!`,
          5000
        );
      },
    });
  }

  addDepartment(department: Department) {
    console.log(department);
    this.departmentService.addDepartment(department).subscribe({
      next: (response) => {
        console.log('Add depaertment: ', response);

        this.toastMessageService.showSuccess(
          'Success',
          'Data added successfully!',
          3000
        );

        this.fetchDepartments(this.page, this.pageSize);
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data adding failed!`,
          5000
        );
      },
    });
  }

  editDepartment(department: Department) {
    console.log(department);
    this.departmentService.editDepartment(department).subscribe({
      next: (response) => {
        console.log('Edit: ', response);

        this.toastMessageService.showSuccess(
          'Success',
          'Data edited successfully!',
          3000
        );

        this.displayEditPopup = false;
        this.fetchDepartments(this.page, this.pageSize);
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data editing failed!`,
          5000
        );
      },
    });
  }

  activateDepartments(ids: string[]) {
    this.departmentService.activateDepartments(ids).subscribe({
      next: (response) => {
        console.log('Actvate: ', response);

        this.toastMessageService.showSuccess(
          'Success',
          'Data activated successfully!',
          3000
        );

        this.fetchDepartments(this.page, this.pageSize);
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data activating failed!`,
          5000
        );
      },
    });
  }

  deactivateDepartments(ids: string[]) {
    this.departmentService.deactivateDepartments(ids).subscribe({
      next: (response) => {
        console.log('Deactvate: ', response);

        this.toastMessageService.showSuccess(
          'Success',
          'Data deactivated successfully!',
          3000
        );

        this.fetchDepartments(this.page, this.pageSize);
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data deactivating failed!`,
          5000
        );
      },
    });
  }

  deleteDepartments(ids: string[]) {
    this.departmentService.deleteDepartments(ids).subscribe({
      next: (response) => {
        console.log('Delete: ', response);

        this.toastMessageService.showSuccess(
          'Success',
          'Data deleted successfully!',
          3000
        );

        this.fetchDepartments(this.page, this.pageSize);
      },
      error: (error) => {
        console.log(error);

        this.toastMessageService.showError(
          'Error',
          `Data deleting failed!`,
          5000
        );
      },
    });
  }
}
