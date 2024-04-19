import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';

const _menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-home',
    routerLink: '',
  },
  {
    label: 'Master Data',
    icon: 'pi pi-fw pi-file',
    routerLink: 'master-data',
  },
];

const _cardType = 'menu';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, SidebarModule, MenuModule, SharedModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  cardType!: string;
  items!: MenuItem[];

  ngOnInit() {
    this.items = _menuItems;
    this.cardType = _cardType;
  }

  onDisplayChanged() {
    this.displayChange.emit(this.display);
  }

  onMenuItemClicked() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
