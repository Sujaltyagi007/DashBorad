import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client.js";
const prisma = new PrismaClient();
export async function GET() {
  try {
    const mail = await prisma.email.findMany({
      where: {
        emailCategory: "draft",
      },
      include: {
        emailBody: true,
      },
    });
    if (mail.length === 0) return NextResponse.json("No Response Found...!");
    return NextResponse.json({ mail });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err: "Error fetching emails" }, { status: 500 });
  }
}
export async function POST(request) {
  const { name, email, subject, emailCategory, emailBody } = await request.json();
  try {
    const newEmail = await prisma.email.create({
      data: {
        name,
        email,
        subject,
        emailCategory,
        emailBody: {
          create: {
            heading: emailBody.heading,
            content: emailBody.content,
          },
        },
      },
    });
    return NextResponse.json(newEmail);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err: "Error creating email" }, { status: 500 });
  }
}
export async function DELETE(request) {
  const { id } = await request.json();
  try {
    const deletedEmail = await prisma.email.delete({
      where: { id },
    });
    return NextResponse.json(deletedEmail);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err: "Error deleting email" }, { status: 500 });
  }
}

export async function PUT(request) {
  const { id, name, email, subject, emailCategory, emailBody } = await request.json();
  try {
    const updatedEmail = await prisma.email.update({
      where: { id },
      data: {
        name,
        email,
        subject,
        emailCategory,
        emailBody: {
          update: {
            heading: emailBody.heading,
            content: emailBody.content,
          },
        },
      },
    });
    return NextResponse.json(updatedEmail);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err: "Error updating email" }, { status: 500 });
  }
}
