"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client.js";
const prisma = new PrismaClient();
export async function GET() {
  try {
    const mail = await prisma.email.findMany({
      include: {
        emailBody: true,
      }
    });
    return NextResponse.json({ mail });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { err: " Error fetching emails" },
      { status: 500 }
    );
  }
}
