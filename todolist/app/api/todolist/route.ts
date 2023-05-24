import { NextResponse } from "next/server";
import { createConnection } from "mysql2/promise";

export const GET = async (request: Request) => {
  try {
    const connection = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    });
    const [rows] = await connection.query("SELECT * FROM user");
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};

export const POST = async (request: Request) => {
  try {
    const connection = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};
