import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coffee } from '../types/coffee';

@Component({
  selector: 'drink-option',
  templateUrl: './drink-option.component.html',
  styleUrls: ['./drink-option.component.css']
})
export class DrinkOptionComponent implements OnInit {

  @Output()
  drinkRequested: EventEmitter<Coffee> = new EventEmitter<Coffee>();

  constructor() { }

  @Input()
  coffee: Coffee;

  ngOnInit() {
  }

  onClick() {
    this.drinkRequested.emit(this.coffee);
  }
}
