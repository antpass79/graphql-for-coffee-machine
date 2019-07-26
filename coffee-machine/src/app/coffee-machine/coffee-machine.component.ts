import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';

@Component({
  selector: 'coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.css']
})
export class CoffeeMachineComponent implements OnInit {

  constructor() { }

  drinks = [];

  ngOnInit() {

    this.drinks = [
      {
        type: 0,
        name: "Coffe",
        available: true
      },
      {
        type: 1,
        name: "Cappuccino",
        available: true
      },
      {
        type: 2,
        name: "Ginsen",
        available: false
      },
      {
        type: 3,
        name: "The",
        available: true
      },
      {
        type: 4,
        name: "Chocolate",
        available: false
      }
    ]
  }

  onDrinkRequested(drink: Drink) {
    
  }
}
