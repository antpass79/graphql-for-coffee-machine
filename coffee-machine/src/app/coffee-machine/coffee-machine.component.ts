import { Component } from '@angular/core';
import { Coffee } from '../graphql/coffee';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.css']
})
export class CoffeeMachineComponent {

  coffees: Coffee[] = [];
  selectedCoffee: Coffee;

  price: number;
  coins: number = 0;
  sugar: number = 3;

  coffeeReady: boolean = false;
  coffeeMachineReady: boolean = true;

  private timeoutHandle: any;

  constructor(private coffeeService: CoffeeService) {
    coffeeService.getCoffees().subscribe((coffees: Coffee[]) => {
      this.coffees.push(...coffees);
    });

    coffeeService.listenForNewCoffee().subscribe((coffee: Coffee) => {
      this.coffees.push(coffee);
    })
  }

  onCoinsChange(coins: number) {
    this.coins = coins;
  }

  onSugarChange(sugar: number) {
    this.sugar = sugar;
  }

  onCoffeeRequested(coffee: Coffee) {
    this.coffeeService.getPrice(coffee.name).subscribe((price: number) => {
      this.price = price;

      if (this.coins == 0) {
        clearTimeout(this.timeoutHandle);
        this.timeoutHandle = setTimeout(() => {
          this.price = undefined;
        }, 2000);
      }
      else if (price <= this.coins) {

        this.coins = 0;
        this.coffeeReady = false;
        this.coffeeMachineReady = false;
        this.coffeeService.prepareCoffee(coffee.name, coffee.custom ? coffee.sugar : this.sugar, this.coins).subscribe((coffee: Coffee) => {

          this.selectedCoffee = coffee;
          this.coffeeReady = true;
        });
      }
    });
  }

  onTakeIt() {
    this.selectedCoffee = null;
    this.coffeeReady = false;
    this.coffeeMachineReady = true;
  }
}
