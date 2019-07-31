import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items = [];
  @Output() removeItem = new EventEmitter<any>();
  @Output() addItem = new EventEmitter<any>();
  @Output() clearItems = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.addItem.emit();
  }

  onClearList() {
    this.clearItems.emit();
  }

  onRemoveItem(juke) {
    this.removeItem.emit(juke);
  }
}
