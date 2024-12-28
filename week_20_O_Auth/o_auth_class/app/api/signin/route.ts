import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const username = body.username;
  const password = body.password;
}
