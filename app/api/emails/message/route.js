"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET() {
  const prisma = new PrismaClient(); 
  try {
    const mail = await prisma.email.findMany({
      where: {
        emailCategory: "message",
      },
      include: {
        emailBody: true,
      },
    });
    if (mail.length === 0) return NextResponse.json("No Response Found...!");
    return NextResponse.json({ mail });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { err: " Error fetching emails" },
      { status: 500 }
    );
  }
}
