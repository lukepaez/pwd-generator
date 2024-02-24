import express from 'express';
import { router as generate } from './routes/generate';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(
    cors({
        origin: '*',
    })
);

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.use('/generate', generate);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/`);
});
