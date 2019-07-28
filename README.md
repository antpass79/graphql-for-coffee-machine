# GraphQL for Coffee Machine

GraphQL example with Angular and Node.js

Thinking an easy program to learn GraphQL, when I was at work, in front of my friend, the coffee machine, I decided that my friend could be a good starting point for the goal.

So what I wanted were 2 things:

- querying a subset of data
- managing different sources
- mutating data
- handling subscriptions

For the moment the above aims can be enough.

## Coffee Machine Components

Coffee Machine has the below components:

- coffee-machine is the front end for taking coffee and adding custom coffee
- graph-gateway manages data from queries and mutations

Currently there are 2 different sources inside the graphql gateway:

- Default Coffees, managed by the default-coffee.service
- Custom Coffees, managed byt the custom-coffee.service

A possible and better solution is to move these services inside others components in order to have the gateway clean from specific sources.

The gateway, through the resolver, should merge these sources.

## Run the Coffee Machine

Under the graphql-gateway folder, from a cmd with administrative privileges, type:

    npm start

Under the coffee-machine folder, from a cmd with administrative privileges, type:

    ng serve

The default configurations are in:

- assets/config.json for the gateway
- environment.ts for the front end

## How to use the Coffee Machine

As a normal Coffee Machine, you can:

- check the price of the coffees
- choose the sugar
- add coins
- take a coffee => don't forget to take it when it's ready!

In addition you can create your custom coffee:

- choose sugar
- choose milk
- choose coffee powder
- other parameters

