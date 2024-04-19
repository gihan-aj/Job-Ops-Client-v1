import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent {
  constructor(private router: Router, private primengConfig: PrimeNGConfig) {}

  @Input() cardType!: string;
  @Input() menuMode: boolean = false;
  @Input() pageMode: boolean = false;
  @Input() menuItem!: MenuItem;
  @Output() menuItemClicked = new EventEmitter<boolean>();

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  navigateToPage() {
    this.router.navigate([this.menuItem.routerLink]);
    this.menuItemClicked.emit(true);
  }
}
