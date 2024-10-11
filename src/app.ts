import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
const app: Application = express();

//  Parser:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  Testing Routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...');
});

//  Application Routes:
app.use('/api/v1/', routes);

//  Global Error Handler:
app.use(globalErrorHandler);

//  Handle Not Found:
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
});

export default app;
