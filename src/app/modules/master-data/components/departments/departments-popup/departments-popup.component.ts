import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../../models/department';
import { PrimeNGConfig } from 'primeng/api';
import { ToastMessageService } from '../../../../shared/services/toast-message.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DataValidationService } from '../../../../shared/services/data-validation.service';

@Component({
  selector: 'app-departments-popup',
  templateUrl: './departments-popup.component.html',
  styleUrl: './departments-popup.component.scss',
})
export class DepartmentsPopupComponent {
  constructor(
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private toastMessageService: ToastMessageService,
    private dataValidationService: DataValidationService
  ) {}

  @Input() popupType!: string;

  @Input() header!: string;

  @Input() display: boolean = false;

  @Input() department: Department = {
    id: '',
    name: '',
    status: true,
  };

  @Output() confirm = new EventEmitter<Department>();
  @Output() displayChange = new EventEmitter<boolean>();

  departmentForm = this.formBuilder.group({
    id: [
      '',
      [
        Validators.required,
        this.dataValidationService.specialCharacterValidation(),
      ],
    ],
    name: ['', [Validators.required]],
    status: [true, []],
  });

  ngOnInit() {
    this.primengConfig.ripple = true;

    if (this.popupType === 'edit') {
      this.departmentForm.get('id')?.setValue(this.department.id);
    }
  }

  ngOnChanges() {
    this.departmentForm.patchValue(this.department);
  }

  onConfirm() {
    const { id, name, status } = this.departmentForm.value;

    this.confirm.emit({
      id: id || '',
      name: name || '',
      status: status || true,
    });

    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    if (this.popupType === 'addNew') {
      this.toastMessageService.showWarn(
        'Add',
        'Adding new record canceled',
        3000
      );
    }
    if (this.popupType === 'edit') {
      this.toastMessageService.showWarn(
        'Edit',
        'Editing record canceled',
        3000
      );
    }
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
