import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppComponent } from './app.component';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';
import { DrinkOptionComponent } from './drink-option/drink-option.component';
import { DrinkReadyComponent } from './drink-ready/drink-ready.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeMachineComponent,
    DrinkOptionComponent,
    DrinkReadyComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost/coffeemachine/drink"
        })
      }
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
