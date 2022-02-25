import dotenv from 'dotenv';
dotenv.config();

export const config = {
    apiKey: process.env.API_KEY,
    db: {
        host: 'localhost',
        user: 'root',
        // datebase: '',
        // password: ,

    }
}