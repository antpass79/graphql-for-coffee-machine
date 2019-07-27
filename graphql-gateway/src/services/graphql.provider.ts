import { DefaultCoffeeService } from "./default-coffee.service";
import { buildSchema } from "graphql";
import { CustomCoffeeService } from "./custom-coffee.service";

export class GraphQLProvider {

    private defaultCoffeeService: DefaultCoffeeService = new DefaultCoffeeService();
    private customCoffeeService: CustomCoffeeService = new CustomCoffeeService();

    buildResolver() {
        return {
            coffees: () => {
                let results = this.defaultCoffeeService.getCoffees().concat(this.customCoffeeService.getCoffees());
                return results;
            },
            price: (name: string) => {
                let price = this.defaultCoffeeService.getPrice(name);
                return price !== -1 ? price : this.customCoffeeService.getPrice(name);
            },
            coffee: (name: string) => {
                return this.defaultCoffeeService.exists(name) ? this.defaultCoffeeService.prepareCoffee(name) : this.customCoffeeService.prepareCoffee(name);
            },
            create: this.customCoffeeService.addCoffee
        };
    }

                // type Subscription {
            //     coffeeCreated: {
            //         subscribe: withFilter(
            //             () => pubsub.asyncIterator(‘messageAdded’),
            //             (payload, variables) => {
            //               return payload.channelId === variables.channelId;
            //             }
            //           )
            //         }
            //     }
            // },

    buildSchema() {
        return buildSchema(`
            type Query {
                coffees: [Coffee]
                price(name: String!): Int
                coffee(name: String!, sugar: Int, coins: Int!): Coffee
            },
            type Mutation {
                create(name: String!, coffeePowder: Int, milk: Int, sugar: Int, price: Int!, available: Boolean): Boolean
            },
            type Coffee {
                name: String!
                available: Boolean
                coffeePowder: Int
                sugar: Int
                milk: Int
                price: Int
            }
        `);
    }
}