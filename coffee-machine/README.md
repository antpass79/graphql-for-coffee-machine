# GraphQL for the Coffee Machine - Client

Try the Coffee Machine.

## Notes

After installing Apollo for GraphQL management, I encountered the following error during build process:

    ERROR in node_modules/apollo-utilities/lib/util/mergeDeep.d.ts(2,52): error TS2370: A rest parameter must be of an array type.

To solve the problem set the below dependencies in package.json:

    ...
    "@angular/compiler-cli": "^7.2.7",
    ...
    "typescript": "~3.1.1"    
    ...

## References

- <https://www.apollographql.com/docs/angular/basics/setup/>
- <https://code-maze.com/consuming-graphql-api-angular/>
- <https://graphql-code-generator.com/docs/getting-started/>
- <https://medium.com/naresh-bhatia/graphql-concepts-i-wish-someone-explained-to-me-a-year-ago-514d5b3c0eab>
