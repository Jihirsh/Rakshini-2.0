import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  const params = await context.params;
  const { postId } = params;
  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.error("Fetch comments error:", error);
    return new NextResponse(JSON.stringify([]), { status: 500 });
  }
};
