import express from 'express';
import cors from 'cors';
import graphqlHttp from 'express-graphql';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { createServer } from 'http';
import { NodeConfig } from './utilities/node-config';

export class Server {

    private _port: number | string;
    get port() {
        return this._port;
    }

    private _apolloServer: ApolloServer;
    private _httpServer: any;

    constructor(port: number | string) {
        this._port = port;

        this._httpServer = this.configureServer();
    }

    async start() {
        this._httpServer.listen({ port: this.port }, () =>{
            console.log('Server is listening on port ' + this.port);
            console.log('GraphqQL path ' + this._apolloServer.graphqlPath);
            console.log('Subscriptions path ' + this._apolloServer.subscriptionsPath);
          });
    }

    private configureServer() {
        var app = express();

        let subscriptions = {
            path: NodeConfig.getValue("SUBSCRIPTIONS_PATH")
        };

        this._apolloServer = new ApolloServer({ typeDefs, resolvers, subscriptions });
        this._apolloServer.applyMiddleware({
            app,
            path: NodeConfig.getValue("GRAPH_PATH")            
        });

        const httpServer = createServer(app);
        this._apolloServer.installSubscriptionHandlers(httpServer);

        return httpServer;
    }
}