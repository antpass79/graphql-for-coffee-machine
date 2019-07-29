import { Component, Input } from '@angular/core';
import { Coffee } from '../graphql/coffee';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'coffee-dashboard',
  templateUrl: './coffee-dashboard.component.html',
  styleUrls: ['./coffee-dashboard.component.css']
})
export class CoffeeDashboardComponent {

  @Input()
  name = "";
  @Input()
  coffeePowderValue = 1;
  @Input()
  milkValue = 1;
  @Input()
  priceValue = 0;
  coffeeInCreation = false;
  priceCalculatedValue = 30;
  available = true;

  private coffeeNames: string[] = [];

  constructor(private coffeeService: CoffeeService) {
    this.coffeeService.getCoffeeNames().subscribe((coffees: Coffee[]) => {
      this.coffeeNames = coffees.map(coffee => coffee.name);
    });
  }

  onNameChange(e: any) {
    this.name = e.target.value;
  }

  onPriceChange(value: number) {
    this.priceCalculatedValue = 30 + 5*value;
  }

  onAvailableChange(e: any) {
    this.available = e.target.checked;
  }

  onCreate() {
    if (!this.name || this.coffeeNames.includes(this.name)) {
      alert("The name of your coffee must be valid and unique! Try again with another name!");
      return;
    }

    let coffee: Coffee = {
      name: this.name,
      coffeePowder: this.coffeePowderValue,
      milk: this.milkValue,
      price: this.priceCalculatedValue,
      available: this.available
    }

    this.coffeeInCreation = true;
    this.coffeeService.createCustomCoffee(coffee).subscribe((data: any) => {
      this.coffeeInCreation = false;

      if (!data.create)
        alert("Impossible to create your prefered coffee! Check the name or something else!");
    });
  }
}
