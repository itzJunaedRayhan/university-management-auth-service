/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

const bootstrap = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.database_url}`)
    console.log('Database connected Successfully...')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('There was an error connecting to database', err)
  }
}

bootstrap()
