import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { TableOptions } from '../../models/table-options';
import { PrimeNGConfig } from 'primeng/api';

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

  selectedDataArray: any[] = [];

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onRowEditInit(rowData: any) {
    console.log(rowData);
    console.log(this.selectedDataArray);
  }
  onRowDeleteInit(rowData: any) {
    console.log(rowData.id);
  }
}
