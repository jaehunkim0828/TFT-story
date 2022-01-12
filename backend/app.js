import express from 'express';
import cors from 'cors';
import axios from 'axios';

import { config } from './config.js';

const app = express();
const apiKey = config.apiKey;

app.use(cors());

app.get('/', async (req, res, next) => {
    res.send('hello');
    const { data } = await axios.get(`https://kr.api.riotgames.com/tft/league/v1/challenger`)
    console.log(data);
})

app.listen(8888, () => console.log(`running localhost:${8888}`))