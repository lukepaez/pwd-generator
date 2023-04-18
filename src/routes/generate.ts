import express from 'express';
import { getPassword } from '../modules/password';
import { getPassphrase } from '../modules/passphrase';

export const router = express.Router();

router.get('/password', (req, res) => {
    return res.json(getPassword(req.headers));
});

router.get('/passphrase', (req, res) => {
    return res.json(getPassphrase());
});
