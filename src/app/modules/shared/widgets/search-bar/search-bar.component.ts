import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<string>();

  searchQuery!: string;

  getSearchInput() {
    this.onSearch.emit(this.searchQuery);
  }
}
