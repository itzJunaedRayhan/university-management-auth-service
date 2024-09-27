import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

//  Parser:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Application Routes:
app.use('/api/v1/', routes);

//  Testing Routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...');
});

//  Global Error Handler:
app.use(globalErrorHandler);

export default app;
