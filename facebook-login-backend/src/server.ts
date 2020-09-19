import 'reflect-metadata';
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import 'dotenv/config';

import './config/container';
import routes from './routes';
import { createDatabase } from './database/db'

createDatabase();

const app = express();
app.use(passport.initialize());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.info('Server listening on port 3333');
})
