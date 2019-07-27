import { Injectable } from "@angular/core";
import { Coffee, Query, Mutation } from "../graphql/coffee";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Apollo } from "apollo-angular";
import { GET_COFFEES, GET_PRICE, PREPARE_COFFEE_WITH_SUGAR, PREPARE_COFFEE_WITHOUT_SUGAR, GET_COFFEE_NAMES } from "../graphql/queries";
import { CREATE_CUSTOM_COFFEE } from "../graphql/mutations";

@Injectable({
  providedIn: "root"
})
export class CoffeeService {

  constructor(private apollo: Apollo) {
  }

  getCoffees(): Observable<Coffee[]> {
    return this.apollo.watchQuery<Query>({
      query: GET_COFFEES
    })
      .valueChanges
      .pipe(
        map(result => result.data.coffees)
      );
  }

  getCoffeeNames(): Observable<Coffee[]> {
    return this.apollo.watchQuery<Query>({
      query: GET_COFFEE_NAMES
    })
      .valueChanges
      .pipe(
        map(result => result.data.coffees)
      );
  }

  getPrice(name: string): Observable<number> {
    return this.apollo.watchQuery<Query>({
      query: GET_PRICE,
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
      query: sugar > 0 ? PREPARE_COFFEE_WITH_SUGAR : PREPARE_COFFEE_WITHOUT_SUGAR,
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

  createCustomCoffee(coffee: Coffee): Observable<Coffee> {
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_CUSTOM_COFFEE,
      variables: {
        name: coffee.name,
        coffeePowder: coffee.coffeePowder,        
        milk: coffee.milk,
        sugar: coffee.sugar,
        price: coffee.price,
        available: coffee.available
      }
    });
      // .valueChanges
      // .pipe(
      //   map(result => result.data.coffee)
      // );
  }
}