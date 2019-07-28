import { PubSub, withFilter } from 'apollo-server';
import { DefaultCoffeeService } from '../services/default-coffee.service';
import { CustomCoffeeService } from '../services/custom-coffee.service';
import { Coffee } from '../models/coffee';

const COFFEE_CREATED = 'coffeeCreated';

const defaultCoffeeService = new DefaultCoffeeService();
const customCoffeeService = new CustomCoffeeService();
const pubsub = new PubSub();

export const resolvers = {
    Query: {
        coffees: () => {
            let results = defaultCoffeeService.getCoffees().concat(customCoffeeService.getCoffees());
            return results;
        },
        price: (root: any, name: string) => {
            let price = defaultCoffeeService.getPrice(name);
            return price !== -1 ? price : customCoffeeService.getPrice(name);
        },
        coffee: (root: any, name: string) => {
            return defaultCoffeeService.exists(name) ? defaultCoffeeService.prepareCoffee(name) : customCoffeeService.prepareCoffee(name);
        },
    },
    Mutation: {
        create: (root: any, coffee: Coffee) => {
            let created = customCoffeeService.addCoffee(coffee);
            if (created)
                pubsub.publish(COFFEE_CREATED, { coffeeCreated: { name: coffee.name, available: coffee.available, sugar: coffee.sugar, custom: coffee.custom } });

            return created;
        }
    },
    Subscription: {
        coffeeCreated: {
            subscribe: () => pubsub.asyncIterator([COFFEE_CREATED])
        },
    }
}
