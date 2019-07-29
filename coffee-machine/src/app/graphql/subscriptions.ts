import gql from "graphql-tag";

export const COFFEE_CREATED = gql`
    subscription coffeeCreated {
        coffeeCreated {
            name
            available
    }
}`; 

