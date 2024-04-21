import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { TableOptions } from '../../models/table-options';
import { PrimeNGConfig } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { PaginationParams } from '../../../../core/models/pagination-params';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  @Input() loadingInProgress: boolean = true;

  @Input() tableOptions!: TableOptions;

  @Input() data: any[] = [];
  @Input() headers: string[] = [];
  @Input() totalDataCount: number = 0;

  @Input() paginationParams: PaginationParams = {
    page: 1,
    pageSize: 5,
  };

  @Output() pageChanged = new EventEmitter<PaginationParams>();
  @Output() onEdit = new EventEmitter();
  @Output() onActivate = new EventEmitter();
  @Output() onDeactivate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  selectedDataArray: any[] = [];

  allowCheckBox: boolean = false;
  allowEditRow: boolean = false;
  allowDeleteRow: boolean = false;
  allowActivationAndDeactivation: boolean = false;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.allowCheckBox = this.tableOptions.allowCheckBox;
    this.allowEditRow = this.tableOptions.allowEditRow;
    this.allowDeleteRow = this.tableOptions.allowDeleteRow;
    this.allowActivationAndDeactivation =
      this.tableOptions.allowActivationAndDeactivation;
  }

  onPageChange($event: PaginatorState) {
    console.log($event);
    if ($event.page !== undefined) this.paginationParams.page = $event.page + 1;
    if ($event.rows !== undefined) this.paginationParams.pageSize = $event.rows;

    this.pageChanged.emit(this.paginationParams);
  }

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
