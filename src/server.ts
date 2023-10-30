import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import { errorHandling } from './middlewares/error';
import { router } from './routes/router';

const server = express();

server.use(express.json());

server.use(router);

// Move o middleware de erro para o final do middleware stack
server.use(errorHandling);

export default server;
