import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tft_db',
    password: 'gkfajsl132!'
})

export const db = pool.promise();
