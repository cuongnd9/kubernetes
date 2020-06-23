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
app.get('/hpa', (req, res) => {
  let x = 0.0001;
  for (let i = 0; i < 1000000; i++) {
    x = Math.sqrt(x);
  }
  res.json({ success: true, x });
});

export default app;
