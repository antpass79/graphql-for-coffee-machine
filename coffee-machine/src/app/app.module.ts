import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppComponent } from './app.component';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';
import { DrinkOptionComponent } from './drink-option/drink-option.component';
import { DrinkReadyComponent } from './drink-ready/drink-ready.component';
import { InsertCoinsComponent } from './insert-coins/insert-coins.component';
import { ChooseSugarComponent } from './choose-sugar/choose-sugar.component';
import { CoffeeDashboardComponent } from './coffee-dashboard/coffee-dashboard.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';

import { Apollo } from 'apollo-angular';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeMachineComponent,
    InsertCoinsComponent,
    ChooseSugarComponent,
    DrinkOptionComponent,
    DrinkReadyComponent,
    CoffeeDashboardComponent,
    RangeSelectorComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(apollo: Apollo,
    httpLink: HttpLink) {
      const http = httpLink.create({
        uri: environment.graphql_path
      });
  
      const ws = new WebSocketLink({
        uri: environment.subscriptions_path,
        options: {
          reconnect: true
        }
      });
  
      const link = split(
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        ws,
        http,
      );

      apollo.create({
        link,
        cache: new InMemoryCache()
      });
    }
}
