import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { TableOptions } from '../../models/table-options';
import { PrimeNGConfig } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { PageEvent } from '../../models/page-event';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  @Input() loadingInProgress: boolean = true;

  @Input() headers: string[] = [];
  @Input() data: any[] = [];

  @Input() tableOptions!: TableOptions;
  @Input() totalDataCount: number = 0;

  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() pageSizeOptions: number[] = [5, 10, 15];

  @Output() pageChanged = new EventEmitter<PageEvent>();
  @Output() onEdit = new EventEmitter();
  @Output() onActivate = new EventEmitter();
  @Output() onDeactivate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  // @Output() onSearch = new EventEmitter<string>();

  selectedDataArray: any[] = [];
  pageEvent: PageEvent = {
    first: 0,
    page: 0,
    pageCount: 1,
    rows: 5,
  };

  allowCheckBox: boolean = false;
  allowEditRow: boolean = false;
  allowDeleteRow: boolean = false;
  allowActivationAndDeactivation: boolean = false;

  // searchQuery!: string;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.allowCheckBox = this.tableOptions.allowCheckBox;
    this.allowEditRow = this.tableOptions.allowEditRow;
    this.allowDeleteRow = this.tableOptions.allowDeleteRow;
    this.allowActivationAndDeactivation =
      this.tableOptions.allowActivationAndDeactivation;

    this.selectedDataArray = [];
  }

  onPageChange(paginationState: PaginatorState) {
    if (paginationState.first !== undefined) {
      this.pageEvent.first = paginationState.first;
    }
    if (paginationState.page !== undefined) {
      this.pageEvent.page = paginationState.page + 1;
    }
    if (paginationState.pageCount !== undefined) {
      this.pageEvent.pageCount = paginationState.pageCount;
    }
    if (paginationState.rows !== undefined) {
      this.pageEvent.rows = paginationState.rows;
    }

    this.pageChanged.emit(this.pageEvent);
  }

  // getSearchInput() {
  //   this.onSearch.emit(this.searchQuery);
  // }

  onRowEditInit(rowData: any) {
    this.onEdit.emit(rowData);
  }
  onRowDeleteInit(rowData: any) {
    this.onDelete.emit([rowData]);
  }

  onRowActivate(rowData: any) {
    this.onActivate.emit([rowData]);
  }

  onRowDeactivate(rowData: any) {
    this.onDeactivate.emit([rowData]);
  }

  onBulkActivate() {
    this.onActivate.emit(this.selectedDataArray);
  }

  onBulkDeactivate() {
    this.onDeactivate.emit(this.selectedDataArray);
  }

  onBulkDelete() {
    this.onDelete.emit(this.selectedDataArray);
  }
}
