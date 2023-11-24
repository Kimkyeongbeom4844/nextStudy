import { NextResponse } from "next/server";
import { createConnection } from "mysql2/promise";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const connection = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    });
    const [result] = await connection.query(
      `delete from list where id=${params.id}`
    );
    // console.log(result);
    return NextResponse.json({ result: true });
  } catch (error) {
    return NextResponse.json({ result: false });
  }
};
