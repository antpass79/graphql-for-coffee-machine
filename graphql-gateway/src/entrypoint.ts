import { Server } from './server';
import path from 'path';

import { NodeConfig } from './utilities/node-config';

NodeConfig.init(path.join(__dirname, '../assets/config.json'));

const port = NodeConfig.getValue('SERVER_PORT');
let server = new Server(port);
server.start();