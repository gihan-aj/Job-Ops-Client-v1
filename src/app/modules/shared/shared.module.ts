import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuCardComponent } from './widgets/menu-card/menu-card.component';
import { TableComponent } from './widgets/table/table.component';
import { SearchBarComponent } from './widgets/search-bar/search-bar.component';
import { AlertComponent } from './widgets/alert/alert.component';

import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    MenuCardComponent,
    TableComponent,
    SearchBarComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    RippleModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    CapitalizeFirstLetterPipe,
  ],
  exports: [MenuCardComponent, TableComponent, SearchBarComponent],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class SharedModule {}
