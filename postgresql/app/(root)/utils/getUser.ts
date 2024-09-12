"use server";
import { PrismaClient } from "@prisma/client";

export async function getUser() {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    // throw new Error("에러");
    return users;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    await prisma.$disconnect();
  }
}
