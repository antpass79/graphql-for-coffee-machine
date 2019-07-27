import express from 'express';
import cors from 'cors';
import graphqlHttp from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { GraphQLProvider } from './services/graphql.provider';

export class Server {

    graphQLProvider: GraphQLProvider = new GraphQLProvider();

    private _port: number | string;
    get port() {
        return this._port;
    }

    private _app: express.Application;

    private _schema: GraphQLSchema;
    private _root: any;

    constructor(port: number | string) {
        this._port = port;

        this._schema = this.graphQLProvider.buildSchema();
        this._root = this.graphQLProvider.buildResolver();
        this._app = this.configureApp();
    }

    async start() {
        this._app.listen(this.port, () => {
            console.log('Server listening on port ' + this.port);
        });
    }

    private configureApp() {
        var app = express();
        app.use('/coffee-machine/graphql', cors(), graphqlHttp({
            schema: this._schema,
            rootValue: this._root,
            graphiql: true
        }));

        return app;
    }
}