import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const conn = () => {
  const client = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })

  client.connect();
  return client
}

export default conn;