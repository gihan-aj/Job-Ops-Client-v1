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
  @Output() dataUpdated = new EventEmitter<boolean>();

  @Input() tableOptions!: TableOptions;

  @Input() data: any[] = [];
  @Input() headers: string[] = [];
  @Input() totalDataCount: number = 0;

  @Input() paginationParams: PaginationParams = {
    page: 1,
    pageSize: 5,
  };
  @Output() pageChanged = new EventEmitter<PaginationParams>();

  selectedDataArray: any[] = [];

  allowCheckBox: boolean = false;

  allowEditRow: boolean = false;
  allowDeleteRow: boolean = false;
  allowActivateRow: boolean = false;
  allowDeactivateRow: boolean = false;

  allowEditMultiple: boolean = false;
  allowDeleteMultiple: boolean = false;
  allowActivateMultiple: boolean = false;
  allowDeactivateMultiple: boolean = false;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.allowCheckBox = this.tableOptions.allowCheckBox;

    this.allowEditRow = this.tableOptions.allowEditRow;
    this.allowDeleteRow = this.tableOptions.allowDeleteRow;
    this.allowActivateRow = this.tableOptions.allowActivateRow;
    this.allowDeactivateRow = this.tableOptions.allowDeactivateRow;

    this.allowDeleteMultiple = this.tableOptions.allowDeleteMultiple;
    this.allowActivateMultiple = this.tableOptions.allowActivateMultiple;
    this.allowDeactivateMultiple = this.tableOptions.allowDeactivateMultiple;
  }

  onPageChange($event: PaginatorState) {
    console.log($event);
    if ($event.page !== undefined) this.paginationParams.page = $event.page + 1;
    if ($event.rows !== undefined) this.paginationParams.pageSize = $event.rows;

    this.pageChanged.emit(this.paginationParams);
  }

  onRowEditInit(rowData: any) {
    console.log(rowData);
    console.log(this.selectedDataArray);
  }
  onRowDeleteInit(rowData: any) {
    console.log(rowData.id);
  }
}
