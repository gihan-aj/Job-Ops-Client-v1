import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  constructor() {}

  user: number = 1234;

  baseUrl: string = 'https://localhost:7055/api/';

  // Table paginator options
  defaultPageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 20];
}
