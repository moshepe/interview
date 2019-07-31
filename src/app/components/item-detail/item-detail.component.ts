import { Juke } from './../../core/models/entities/juke.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() juke = {};
  @Output() removeItem = new EventEmitter<Juke>();
  constructor() { }

  ngOnInit() {
  }

  onRemoveItem(juke) {
    this.removeItem.emit(juke);
  }
}
