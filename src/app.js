import express from 'express';
import userRoutes from './routes/UserRoute.js';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

export default app;

