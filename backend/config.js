import dotenv from "dotenv";
dotenv.config();

export const config = {
  apiKey: process.env.API_KEY,
  db: {
    host: "3.34.197.199",
    user: "root",
    // datebase: '',
    // password: ,
  },
};
