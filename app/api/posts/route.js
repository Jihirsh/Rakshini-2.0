import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");
    const search = searchParams.get("search");

    let where = {};

    if (cat && cat !== "All") {
      const category = await prisma.category.findFirst({
        where: { title: { equals: cat, mode: "insensitive" } },
        select: { id: true },
      });

      if (category) {
        where.categoryId = category.id; // ✅ this matches your schema
      } else {
        return NextResponse.json([], { status: 200 });
      }
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { desc: { contains: search, mode: "insensitive" } },
      ];
    }

    const posts = await prisma.post.findMany({
      where: Object.keys(where).length ? where : undefined,
      orderBy: { createdAt: "desc" },
      include: {
        category: true, // ✅ relation name is "category"
        user: true,
        comments: true,
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("API /posts error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
