import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../../utils/auth";

export const GET = async (req, context) => {
  const params = await context.params;
  const { postId } = params;
  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
      },
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Fetch comments error:", error);
    return NextResponse.json([], { status: 500 });
  }
};

export const POST = async (req, context) => {
  const params = await context.params;
  const { postId } = params;
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { desc } = body;

  if (!desc || desc.trim().length < 2) {
    return NextResponse.json({ error: "Comment too short" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const comment = await prisma.comment.create({
      data: {
        desc,
        postId,
        userId: user.id,
        // parentId: null // add if implementing nested comments
      },
      include: { user: true },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Create comment error:", error);
    return NextResponse.json(
      { error: "Failed to post comment" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, context) => {
  const params = await context.params;
  const { searchParams } = new URL(
    req.url,
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  );
  const commentId = searchParams.get("commentId");
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  //check that the user owns the comment before allowing delete
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (comment?.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  await prisma.comment.delete({ where: { id: commentId } });
  return NextResponse.json({ success: true });
};

export const PATCH = async (req, context) => {
  const params = await context.params;
  const { searchParams } = new URL(
    req.url,
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  );
  const commentId = searchParams.get("commentId");
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { desc } = body;
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (comment?.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const updated = await prisma.comment.update({
    where: { id: commentId },
    data: { desc },
    include: { user: true },
  });
  return NextResponse.json(updated, { status: 200 });
};
