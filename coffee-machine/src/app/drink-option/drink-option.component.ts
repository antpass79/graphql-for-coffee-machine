import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Drink } from '../models/drink';

@Component({
  selector: 'drink-option',
  templateUrl: './drink-option.component.html',
  styleUrls: ['./drink-option.component.css']
})
export class DrinkOptionComponent implements OnInit {

  drinkRequested: EventEmitter<Drink> = new EventEmitter<Drink>();

  constructor() { }

  @Input()
  drink: Drink;

  ngOnInit() {
  }

  onClick() {
    this.drinkRequested.emit(this.drink);
  }
}
