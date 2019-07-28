import gql from "graphql-tag";

export const CREATE_CUSTOM_COFFEE = gql`
    mutation createCustomCoffee($name: String!, $coffeePowder: Int, $milk: Int, $sugar: Int, $price: Int!, $available: Boolean, $custom: Boolean) {
        create(name: $name, coffeePowder: $coffeePowder, milk: $milk, sugar: $sugar, price: $price, available: $available, custom: $custom)
    }
`; 
