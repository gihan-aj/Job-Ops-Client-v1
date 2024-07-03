import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertComponent } from '../widgets/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private dialogService: DialogService) {}

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(AlertComponent, {
      closable: false,
      width: '350px',
      data: {
        header: 'Are you sure',
        type: 'success',
        icon: 'pi-check-circle',
        message: 'proceed',
      },
    });
  }
}
