import { Component, Input } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  constructor(
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ) {}

  data!: {
    header: '';
    type: '';
    icon: '';
    message: '';
  };

  ngOnInit() {
    console.log(this.config);
    console.log(this.ref);
    this.data = this.config.data;
  }

  onOk() {
    this.ref.close();
  }
}
