import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { PaginationParams } from '../../../core/models/pagination-params';
import { Observable } from 'rxjs';
import { GetResponse } from '../../../core/models/get-response';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private apiService: ApiService) {}

  getDepartments = (
    url: string,
    params: PaginationParams
  ): Observable<GetResponse<Department>> =>
    this.apiService.get(url, {
      params,
      responseType: 'json',
    });

  addDepartment = (url: string, body: Department): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editDepartment = (url: string, body: Department): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteDepartment = (url: string, body: Department): Observable<any> => {
    return this.apiService.put(url, body, {});
  };
}
