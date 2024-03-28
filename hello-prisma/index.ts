import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "김경범",
  //     email: "bibix321@naver.com",
  //     posts: {
  //       create: {
  //         title: "helloWorld",
  //       },
  //     },
  //     profile: {
  //       create: {
  //         bio: "frontendDeveloper",
  //       },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findFirst({
    include: {
      posts: true,
      profile: true,
    },
    where: {
      id: 1,
    },
  });
  console.dir(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: any) => {
    console.error(error);
    await prisma.$disconnect();
  });
