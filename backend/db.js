import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '15.165.15.185',
    user: 'root',
    database: 'tft_db',
    password: 'gkfajsl132!'
})

export const db = pool.promise();