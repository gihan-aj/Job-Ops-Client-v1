import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './widgets/menu-card/menu-card.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableComponent } from './widgets/table/table.component';
import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';

@NgModule({
  declarations: [MenuCardComponent, TableComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CapitalizeFirstLetterPipe,
  ],
  exports: [MenuCardComponent, TableComponent],
})
export class SharedModule {}
