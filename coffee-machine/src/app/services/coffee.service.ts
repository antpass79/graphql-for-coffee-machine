import { Injectable } from "@angular/core";
import { Coffee, Query } from "../types/coffee";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';

@Injectable({
    providedIn: "root"
})
export class CoffeeService {

    constructor(private apollo: Apollo) {
    }

    getCoffees(): Observable<Coffee[]> {
        return this.apollo.watchQuery<Query>({
            query: gql`
              query getCoffees {
                coffees {
                  name,
                  available
                }
              }
            `,
        })
            .valueChanges
            .pipe(
                map(result => result.data.coffees)
            );
    }

    getPrice(name: string): Observable<number> {
        return this.apollo.watchQuery<Query>({
            query: gql`
              query getPrice($name: String!) {
                price(name: $name)
              }
            `,
            variables: {
                name: name
            }
        })
            .valueChanges
            .pipe(
                map(result => result.data.price)
            );
    }

    prepareCoffee(name: string, sugar: number, coins: number): Observable<Coffee> {
        return this.apollo.watchQuery<Query>({
            query: gql`
              query preprareCoffee($name: String!, $sugar: Int!, $coins: Int!) {
                coffee(name: $name, sugar: $sugar, coins: $coins) {
                    name
                    milk
                    sugar
                }
              }
            `,
            variables: {
                name: name,
                sugar: sugar,
                coins: coins
            }
        })
            .valueChanges
            .pipe(
                map(result => result.data.coffee)
            );
    }
}