import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import { errorHandling } from './middlewares/error.middlware';
import { router } from './routes/router';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(router);

server.use(errorHandling);

export default server;
