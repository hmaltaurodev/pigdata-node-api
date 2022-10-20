import express from 'express';
import { AppDataSource } from './database/AppDataSource';

AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) => console.error('Error during Data Source initialization!', err));
const app = express();

app.use('/api', (req, res) => {
    return res.json({
        message: 'Hello World!'
    });
});

export { app };
