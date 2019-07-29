export class DefaultCoffeeService {
    private coffees = [
        {
            name: 'Coffee',
            available: true,
            coffeePowder: 1,
            sugar: 3,
            milk: 0,
            price: 30
        },
        {
            name: 'Coffee with milk',
            available: true,
            coffeePowder: 1,
            sugar: 3,
            milk: 1,
            price: 30
        },
        {
            name: 'Cappuccino',
            available: true,
            coffeePowder: 1,
            sugar: 3,
            milk: 2,
            price: 40
        },
        {
            name: 'Double Coffee',
            available: false,
            coffeePowder: 2,
            sugar: 3,
            milk: 0,
            price: 40
        }
    ]

    exists(args: any): boolean {
        let selectedCoffee = this.coffees.find(coffee => coffee.name === args.name);
        return !selectedCoffee ? false : true;
    }

    getCoffees = () => {
        return this.coffees;
    }
    
    getPrice = (args: any) => {
        let selectedCoffee = this.coffees.find(coffee => coffee.name === args.name);
        return !selectedCoffee ? -1 : selectedCoffee.price;
    }
    
    prepareCoffee = (args: any) => {
        var selectedCoffee = this.coffees.find(coffee => coffee.name === args.name);
        selectedCoffee.sugar = args.sugar;
    
        return selectedCoffee;
    }    
}