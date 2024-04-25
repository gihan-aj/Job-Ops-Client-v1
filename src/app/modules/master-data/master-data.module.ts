import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MasterDataComponent } from './master-data/master-data.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentsPopupComponent } from './components/departments/departments-popup/departments-popup.component';

import { ToastMessageService } from '../shared/services/toast-message.service';

import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    MasterDataComponent,
    DepartmentsComponent,
    DepartmentsPopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterDataRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    RippleModule,
    DialogModule,
    InputTextModule,
  ],
  providers: [ToastMessageService, ConfirmationService],
})
export class MasterDataModule {}
