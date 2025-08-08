import { NextRequest } from "next/server";

export async function GET(request) {
    const response = await fetch("http://localhost:3000/api/emails/trash", {
        method: "GET",
    });
    return response;
}