import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../utils/auth";

export const POST = async (req) => {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  const { title, desc, content, img, categoryId, tags } = await req.json();

  if (!title || !desc || !content || !categoryId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  //generate slug from the title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  //add tags later if needed
  const post = await prisma.post.create({
    data: {
      title,
      desc,
      content,
      img,
      slug,
      categoryId,
      userId: user.id,
      author: user.name,
    },
  });

  return NextResponse.json(post, { status: 201 });
};
