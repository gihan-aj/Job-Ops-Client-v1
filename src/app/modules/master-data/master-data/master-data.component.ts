import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

const _menuItems: MenuItem[] = [
  {
    label: 'Departments',
    icon: 'pi-building-columns',
    routerLink: 'master-data/departments',
  },
  {
    label: 'Sections',
    icon: 'pi-warehouse',
    routerLink: 'master-data/sections',
  },
  {
    label: 'Machines',
    icon: 'pi-cog',
    routerLink: 'master-data/sections',
  },
  {
    label: 'Job Titles',
    icon: 'pi-briefcase',
    routerLink: 'master-data/job-titles',
  },
  {
    label: 'Employees',
    icon: 'pi-id-card',
    routerLink: 'master-data/employees',
  },
];

const _cardType = 'page';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrl: './master-data.component.scss',
})
export class MasterDataComponent {
  cardType!: string;
  items!: MenuItem[];

  ngOnInit() {
    this.items = _menuItems;
    this.cardType = _cardType;
  }
}
