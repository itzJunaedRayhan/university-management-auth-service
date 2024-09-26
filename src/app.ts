import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/users.route';
import globalErrorHandler from './middleware/globalErrorHandler';
const app: Application = express();

//  Parser:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Application Routes:
app.use('/api/v1/users/', UserRoutes.router);

//  Testing Routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...');
});

//  Global Error Handler:
app.use(globalErrorHandler);

export default app;
