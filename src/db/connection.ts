import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'aaaaaa1',
    database: 'shopdb',
    port: 5432
});