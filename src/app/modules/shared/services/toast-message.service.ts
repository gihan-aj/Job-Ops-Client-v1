import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  constructor(private messageService: MessageService) {}

  showSuccess(summary: string, details: string, lifeTime: number) {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: details,
      life: lifeTime,
    });
  }
  showInfo(summary: string, details: string, lifeTime: number) {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: details,
      life: lifeTime,
    });
  }
  showWarn(summary: string, details: string, lifeTime: number) {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: details,
      life: lifeTime,
    });
  }
  showError(summary: string, details: string, lifeTime: number) {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: details,
      life: lifeTime,
    });
  }
}
