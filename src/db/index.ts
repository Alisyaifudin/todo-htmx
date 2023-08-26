import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: import.meta.env.DATABASE_HOST,
	user: import.meta.env.DATABASE_USER,
	database: import.meta.env.DATABASE_NAME,
	password: import.meta.env.DATABASE_PASSWORD,
	port: import.meta.env.DATABASE_PORT,
});

const db = drizzle(connection);
