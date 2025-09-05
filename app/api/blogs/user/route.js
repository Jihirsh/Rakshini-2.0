import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../../utils/auth";

export const GET = async (req) => {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }
  const blogs = await prisma.post.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: { category: true }
  });
  return NextResponse.json(blogs);
};