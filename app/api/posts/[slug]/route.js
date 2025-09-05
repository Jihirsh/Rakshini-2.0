import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  const params = await context.params;
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        category: true,
        user: true,
        comments: {
          include: {
            user: true,
          }
        },
      }
    });
    if (!post) {
      return new NextResponse(JSON.stringify({ error: "Post not found" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Single post fetch error:", error);
    return new NextResponse(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};