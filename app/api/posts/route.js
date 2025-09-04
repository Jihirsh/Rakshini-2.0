import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");
    const search = searchParams.get("search");
    // Build the filter
    let where = {};
    if (cat && cat !== "All") {
      where.catSlug = cat.toLowerCase();
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { desc: { contains: search, mode: "insensitive" } },
      ];
    }
    const posts = await prisma.post.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        cat: true,
        user: true,
      },
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify([]), { status: 500 });
  }
};
