import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MasterDataComponent } from './master-data/master-data.component';
import { SharedModule } from '../shared/shared.module';
import { DepartmentsComponent } from './components/departments/departments.component';

@NgModule({
  declarations: [MasterDataComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    ButtonModule,
    TableModule,
    SharedModule,
  ],
})
export class MasterDataModule {}
