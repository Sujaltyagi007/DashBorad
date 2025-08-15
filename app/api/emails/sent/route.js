import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client.js";
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient().$extends(withAccelerate());

export async function GET() {
  try {
    const mail = await prisma.email.findMany({
      where: {
        emailCategory: "sent",
      },
      include: {
        emailBody: true,
      },
    });
    if (mail.length === 0) return NextResponse.json("No Response Found...!");
    return NextResponse.json({mail});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err: "Error fetching emails" }, { status: 500 });
  }
}
