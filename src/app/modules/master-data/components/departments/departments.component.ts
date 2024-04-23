import { Component } from '@angular/core';

import { DepartmentsService } from '../../services/departments.service';
import { AppSettingsService } from '../../../../core/services/app-settings.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

import { PrimeNGConfig } from 'primeng/api';

import { GetResponse } from '../../../../core/models/get-response';
import { Department } from '../../models/department';
import { TableOptions } from '../../../shared/models/table-options';
import { PageEvent } from '../../../shared/models/page-event';

const _headers: string[] = ['id', 'name'];

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private appSettingsService: AppSettingsService,
    private departmentService: DepartmentsService,
    private toastMessageService: ToastMessageService
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
  dataCount: number = 0;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.headers = _headers;
    this.page = 1;
    this.pageSize = this.appSettingsService.defaultPageSize;
    this.pageSizeOptions = this.appSettingsService.pageSizeOptions;

    this.setTableOptions();

    console.log('Page: ', this.page);
    console.log('Page Size: ', this.pageSize);
    this.fetchDepartments(this.page, this.pageSize);
  }

  setTableOptions() {
    this.tableOptions.allowCheckBox = true;
    this.tableOptions.allowEditRow = true;
    this.tableOptions.allowDeleteRow = true;
    this.tableOptions.allowActivationAndDeactivation = true;
  }

  // onPageChange() {
  //   // console.log($event);
  //   // this.paginationParams.page = $event.page;
  //   // this.paginationParams.pageSize = $event.pageSize;
  //   this.fetchDepartments(this.page, this.pageSize);
  // }

  onPageChange(pageEvent: PageEvent) {
    console.log('Department component: ', pageEvent);
    this.page = pageEvent.page;
    this.pageSize = pageEvent.rows;

    console.log('Page: ', this.page);
    console.log('Page Size: ', this.pageSize);
    this.fetchDepartments(this.page, this.pageSize);
  }

  onEdit(rowData: any) {
    console.log(rowData);
  }

  onDelete(dataArray: any) {
    console.log(dataArray);
  }

  onActivate(dataArray: any) {
    console.log(dataArray);
  }

  onDeactivate(dataArray: any) {
    console.log(dataArray);
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
}
