import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCardComponent } from './widgets/menu-card/menu-card.component';
import { TableComponent } from './widgets/table/table.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { ConfirmationService, MessageService } from 'primeng/api';

import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './widgets/search-bar/search-bar.component';

@NgModule({
  declarations: [MenuCardComponent, TableComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    RippleModule,
    CapitalizeFirstLetterPipe,
  ],
  exports: [MenuCardComponent, TableComponent, SearchBarComponent],
  providers: [MessageService, ConfirmationService],
})
export class SharedModule {}
