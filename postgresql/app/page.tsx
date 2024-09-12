import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  let result;
  try {
    result = await prisma.user.findUnique({
      where: {
        id: 1,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return <div>{result ? <p>{result.name}</p> : "없음"}</div>;
}
