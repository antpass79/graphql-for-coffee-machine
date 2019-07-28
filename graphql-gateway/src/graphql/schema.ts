import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        coffees: [Coffee]
        price(name: String!): Int
        coffee(name: String!, sugar: Int, coins: Int!): Coffee
    },
    type Subscription {
        coffeeCreated: Coffee
    },
    type Mutation {
        create(name: String!, coffeePowder: Int, milk: Int, sugar: Int, price: Int!, available: Boolean, custom: Boolean): Boolean
    },
    type Coffee {
        name: String!
        available: Boolean
        coffeePowder: Int
        sugar: Int
        milk: Int
        price: Int
        custom: Boolean
    }
`;