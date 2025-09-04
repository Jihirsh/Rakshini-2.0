import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { title: "asc" }, // or { name: "asc" } if your field is 'name'
    });
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify([]), { status: 500 });
  }
};
