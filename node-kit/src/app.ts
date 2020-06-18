import express, { Application, Response } from 'express';
import apiRoute from './routes';

// Create a new express application instance.
const app: Application = express();

// REST API
app.get('/', (_, res: Response) => {
  res.send('Xin chào 👋🇻🇳');
});
app.use('/api', apiRoute);
app.get('/health', (req, res) => res.json({ success: true }));

export default app;
