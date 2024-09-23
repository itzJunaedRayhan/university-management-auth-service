import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './app/modules/users/users.route';
const app: Application = express();

//  Parser:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Application Routes:
app.use('/api/v1/users/', usersRouter);

//  Testing Routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...');
});

export default app;
