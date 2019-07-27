export class DefaultCoffeeService {
    private coffees = [
        {
            name: 'Coffee',
            available: true,
            sugar: 3,
            milk: 0,
            price: 30
        },
        {
            name: 'Coffee with milk',
            available: true,
            sugar: 3,
            milk: 1,
            price: 30
        },
        {
            name: 'Cappuccino',
            available: true,
            sugar: 3,
            milk: 2,
            price: 40
        },
        {
            name: 'Double Coffee',
            available: false,
            sugar: 3,
            milk: 0,
            price: 40
        }
    ]
    
    getCoffees = () => {
        return this.coffees;
    }
    
    getPrice = (args: any) => {
        var selectedCoffee = this.coffees.find(coffee => coffee.name === args.name);
        return !selectedCoffee ? -1: selectedCoffee.price;
    }
    
    prepareCoffee = (args: any) => {
        var selectedCoffee = this.coffees.find(coffee => coffee.name === args.name);
        selectedCoffee.sugar = args.sugar;
    
        return selectedCoffee;
    }    
}