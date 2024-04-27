import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { PaginationParams } from '../../../core/models/pagination-params';
import { Observable } from 'rxjs';
import { GetResponse } from '../../../core/models/get-response';
import { Department } from '../models/department';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(
    private apiService: ApiService,
    private appSettingsService: AppSettingsService
  ) {}

  user: number = this.appSettingsService.user;
  baseUrl: string = this.appSettingsService.baseUrl;

  getDepartments = (
    page: number,
    pageSize: number
  ): Observable<GetResponse<Department>> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('pageSize', pageSize);

    const url: string = `${this.baseUrl}departments`;

    return this.apiService.get(url, { params: queryParams });
  };

  getDepartmentsBySearch = (
    page: number,
    pageSize: number,
    searchQuery: string
  ): Observable<GetResponse<Department>> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('searchQuery', searchQuery);

    const url: string = `${this.baseUrl}departments/search`;

    return this.apiService.get(url, { params: queryParams });
  };

  addDepartment = (body: Department): Observable<Department> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('user', this.user);

    const url: string = `${this.baseUrl}departments`;

    return this.apiService.post(url, body, { params: queryParams });
  };

  editDepartment = (body: Department): Observable<any> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('user', this.user);

    const url = `${this.baseUrl}departments/update`;

    return this.apiService.put(url, body, { params: queryParams });
  };

  deleteDepartments = (body: string[]): Observable<any> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('user', this.user);

    const url: string = `${this.baseUrl}departments/bulk-delete`;

    return this.apiService.put(url, body, { params: queryParams });
  };

  activateDepartments = (body: string[]): Observable<any> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('user', this.user);

    const url: string = `${this.baseUrl}departments/bulk-activate`;

    return this.apiService.put(url, body, { params: queryParams });
  };

  deactivateDepartments = (body: string[]): Observable<any> => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('user', this.user);

    const url: string = `${this.baseUrl}departments/bulk-deactivate`;

    return this.apiService.put(url, body, { params: queryParams });
  };
}
