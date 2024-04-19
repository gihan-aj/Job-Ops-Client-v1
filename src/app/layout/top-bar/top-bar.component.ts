import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ButtonModule, ToolbarModule, SideBarComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  displaySideBar: boolean = false;
  @Input() title: string = 'Job Operation Management';
  displaySidebar: boolean = false;

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onMenuButtonClicked() {
    this.displaySideBar = true;
  }
}
