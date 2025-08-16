import { PrismaClient } from "../app/generated/prisma/client.js";
const prisma = new PrismaClient();
import data from "@/store/Store.jsx" assert { type: "json" };

async function main() {
  for (const item of data) {
    await prisma.email.create({
      data: {
        name: item.name,
        email: item.email,
        subject: item.subject,
        Date: new Date(item.Date),
        emailCategory: item.emailCategory,
        emailBody: {
          create: {
            heading: item.emailBody.create.heading,
            content: item.emailBody.create.content,
          },
        },
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seeding completed successfully.");
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
