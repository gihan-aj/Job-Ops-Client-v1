import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MasterDataComponent } from './master-data/master-data.component';
import { DepartmentsComponent } from './components/departments/departments.component';

import { ToastMessageService } from '../shared/services/toast-message.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [MasterDataComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [ToastMessageService],
})
export class MasterDataModule {}
