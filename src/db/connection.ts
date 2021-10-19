import { password, user, host, name } from './../lib/variables';
import { Pool } from 'pg';

export const pool = new Pool({
    user: user,
    host: host,
    password: password,
    database: name,
    port: 5432,
});