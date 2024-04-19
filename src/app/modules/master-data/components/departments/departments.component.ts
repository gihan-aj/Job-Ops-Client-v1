import { Component } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { GetResponse } from '../../../../core/models/get-response';
import { Department } from '../../models/department';

const _headers: string[] = ['id', 'name'];

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  constructor(private departmentService: DepartmentsService) {}

  loadingInProgress: boolean = true;
  headers: string[] = [];
  departments: Department[] = [];
  dataCount: number = 0;

  ngOnInit() {
    this.headers = _headers;
    this.fetchDepartments(1, 5);
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
