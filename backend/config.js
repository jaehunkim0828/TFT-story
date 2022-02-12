import dotenv from 'dotenv';
dotenv.config();

export const config = {
    apiKey: process.env.API_KEY,
    db: {
        host: '15.165.15.185',
        user: 'root',
        // datebase: '',
        // password: ,

    }
}