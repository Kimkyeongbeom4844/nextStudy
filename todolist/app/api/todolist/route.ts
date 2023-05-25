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
    const [result] = await connection.query(`select * from list`);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};

export const POST = async (request: Request) => {
  const { message } = await request.json();
  console.log(message);
  try {
    const connection = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    });
    const [result] = await connection.query(
      `insert into list (title,created) values ('${message}',now())`
    );
    return NextResponse.json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};
