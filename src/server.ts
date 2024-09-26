/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { errorLogger, logger } from './shared/logger';
import { Server } from 'http';

//  Handle  - Uncaught exceptions:
let server: Server;
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

const bootstrap = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected Successfully...');

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('There was an error connecting to database', err);
  }

  //  Handle - unhandle Rejection:
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

bootstrap();

//  Close Server if SIGNAL is Terminated
process.on(`SIGTERM`, () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
