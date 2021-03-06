import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coffee } from '../graphql/coffee';

@Component({
  selector: 'drink-ready',
  templateUrl: './drink-ready.component.html',
  styleUrls: ['./drink-ready.component.css']
})
export class DrinkReadyComponent implements OnInit {

  @Output()
  takeIt = new EventEmitter<any>();

  @Input()
  coffee: Coffee;

  @Input()
  coffeeReady: boolean = false;
  @Input()
  coffeeMachineReady: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onTakeACoffee() {
    alert("Take a Coffee please! It's the right time!");
  }

  onTakeIt() {
    this.takeIt.emit();
  }
}
