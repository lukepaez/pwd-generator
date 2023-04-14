import express from 'express';
import { router as generate } from './routes/generate';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.use('/generate', generate);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/`);
});
