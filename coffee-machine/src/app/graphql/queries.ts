import gql from "graphql-tag";

export const GET_COFFEES = gql`
    query getCoffees {
        coffees {
            name,
            available
        }
    }
`; 

export const GET_COFFEE_NAMES = gql`
    query getCoffees {
        coffees {
            name
        }
    }
`; 

export const GET_PRICE = gql`
    query getPrice($name: String!) {
        price(name: $name)
    }
`;

export const PREPARE_COFFEE_WITH_SUGAR = gql`
    query preprareCoffee($name: String!, $sugar: Int, $coins: Int!) {
        coffee(name: $name, sugar: $sugar, coins: $coins) {
            name
            coffeePowder
            milk
            sugar
        }
    }
`;

export const PREPARE_COFFEE_WITHOUT_SUGAR = gql`
    query preprareCoffee($name: String!, $sugar: Int, $coins: Int!) {
        coffee(name: $name, sugar: $sugar, coins: $coins) {
            name
            coffeePowder
            milk
        }
    }
`;