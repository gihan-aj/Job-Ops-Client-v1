import { Component } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { GetResponse } from '../../../../core/models/get-response';
import { Department } from '../../models/department';
import { TableOptions } from '../../../shared/models/table-options';
import { PrimeNGConfig } from 'primeng/api';
import { PaginationParams } from '../../../../core/models/pagination-params';

const _headers: string[] = ['id', 'name', 'status'];
const _pageSize: number = 5;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private departmentService: DepartmentsService
  ) {}

  loadingInProgress: boolean = true;
  headers: string[] = [];
  departments: Department[] = [];
  dataCount: number = 0;

  tableOptions: TableOptions = new TableOptions();

  paginationParams: PaginationParams = {
    page: 1,
    pageSize: 5,
  };

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.headers = _headers;
    this.paginationParams.pageSize = _pageSize;

    this.setTableOptions();

    this.fetchDepartments(
      this.paginationParams.page,
      this.paginationParams.pageSize
    );
  }

  setTableOptions() {
    this.tableOptions.allowCheckBox = true;
    this.tableOptions.allowEditRow = true;
    this.tableOptions.allowDeleteRow = true;
    this.tableOptions.allowActivateRow = true;
    this.tableOptions.allowDeactivateRow = true;
    this.tableOptions.allowActivateMultiple = true;
    this.tableOptions.allowDeactivateMultiple = true;
    this.tableOptions.allowDeleteMultiple = true;
  }

  onPageChange($event: PaginationParams) {
    console.log($event);
    this.fetchDepartments($event.page, $event.pageSize);
  }

  fetchDepartments(page: number, pageSize: number) {
    this.departmentService
      .getDepartments('https://localhost:7055/api/department', {
        page: page,
        pageSize: pageSize,
      })
      .subscribe({
        next: (data: GetResponse<Department>) => {
          if (data.dataList) this.departments = data.dataList;
          if (data.count) this.dataCount = data.count;
          console.log(this.departments);

          this.loadingInProgress = false;

          // mapping for the table
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
