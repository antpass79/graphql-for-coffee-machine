import { Coffee } from "../models/coffee";

export class CustomCoffeeService {
    private coffees = new Map<string, Coffee>();
    
    exists(name: string): boolean {
        return this.coffees.has(name);
    }
 
    addCoffee = (coffee: Coffee) => {
        if (this.coffees.has(coffee.name))
            return false;

        console.log(coffee);

        this.coffees.set(coffee.name, coffee);

        return this.coffees.has(coffee.name);
    }

    getCoffees = () => {
        return Array.from(this.coffees.values());
    }
    
    getPrice = (args: any) => {
        if (!this.coffees.has(args.name))
            return -1;

        var selectedCoffee = this.coffees.get(args.name);
        return !selectedCoffee ? -1: selectedCoffee.price;
    }
    
    prepareCoffee = (args: any) => {
        if (!this.coffees.has(args.name))
            return null;

        var selectedCoffee = this.coffees.get(args.name);
        selectedCoffee.sugar = args.sugar;
    
        return selectedCoffee;
    }
}