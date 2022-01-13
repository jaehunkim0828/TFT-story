import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.send('hello');
    console.log(data);
})

app.listen(8888, () => console.log(`running localhost:${8888}`))