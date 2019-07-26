import { Server } from './server';

const port = process.env.LISTEN_PORT || 2000;

let server = new Server(port);
server.start();