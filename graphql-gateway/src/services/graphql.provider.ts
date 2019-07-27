import { DefaultCoffeeService } from "./default-coffee.service";
import { buildSchema } from "graphql";

export class GraphQLProvider {

    private defaultCoffeeService: DefaultCoffeeService = new DefaultCoffeeService();

    buildResolver() {
        return {
            coffees: this.defaultCoffeeService.getCoffees,
            price: this.defaultCoffeeService.getPrice,
            coffee: this.defaultCoffeeService.prepareCoffee
        };
    }

    buildSchema() {
        return buildSchema(`
            type Query {
                coffees: [Coffee]
                price(name: String!): Int
                coffee(name: String!, sugar: Int!, coins: Int!): Coffee
            },
            type Coffee {
                name: String!
                available: Boolean
                sugar: Int
                milk: Int
                price: Int
            }
        `);
    }
}