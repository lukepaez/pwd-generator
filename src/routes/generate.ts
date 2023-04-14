import express from 'express';
import { getPassword } from '../modules/password';
import { getPassphrase } from '../modules/passphrase';

export const generate = express.Router();

generate.get('/password', (req, res) => {
    return res.json(getPassword());
});

generate.get('/passphrase', (req, res) => {
    return res.json(getPassphrase());
});
