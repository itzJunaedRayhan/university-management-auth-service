/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { errorLogger, logger } from './shared/logger';

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
};

bootstrap();
