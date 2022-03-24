import dotenv from "dotenv";
dotenv.config();

export const config = {
  apiKey: process.env.API_KEY,
  db: {
    host: "3.36.60.81",
    user: "root",
    // datebase: '',
    // password: ,
  },
};
