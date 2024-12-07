import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
client.user.create({
  data: {
    username: "Alice",
    password: "1234",
    age: 20,
  },
});
